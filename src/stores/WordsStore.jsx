import { makeAutoObservable } from "mobx";

class WordsStore {
  wordsApi = [];
  error = null;
  isLoading = false;
  errorStatus = "";

  setValue = (word) => {
    this.value = word
  }

  constructor() {
    makeAutoObservable(this);
  }

  async getWords() {
    this.isLoading = true;
    fetch('/api/words')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          this.errorStatus = response.status
          throw new Error('Something went wrong ...');
        }
      })
      .then((response) => {
        this.wordsApi = response;
        this.isLoading = false;
      })
      .catch(error => {
        this.error = error;
        this.isLoading = false;
      });
  }

  handlerAddWord = (newWord) => {
    let tags = prompt("Введите тег для слова");
    let tagTest = /^[А-Яа-яЁё\s]+$/;
    if (tagTest.test(tags)) {
      newWord.tags = tags;
      const options = {
        method: 'POST',
        headers: {
          'Contept-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
      };
      fetch(`/api/words/add`, options).then(response => response.json())
        .then(data => {
          console.log(data)
        });
      alert("Слово добавлено!")
      this.wordsApi.unshift(newWord)
    }
    else {
      alert("Убедитесь, что вы вводите символы на кириллице.")
    }
  };

  handlerInputSave = (updatedWord) => {
    let flag = true;
    if (updatedWord.tags === undefined || updatedWord.tags.length === 0) {
      let tags = prompt("Введите тег для слова");
      let tagTest = /^[А-Яа-яЁё\s]+$/;
      if (tagTest.test(tags)) {
        updatedWord.tags = tags;
      }
      else {
        alert("Убедитесь, что вы вводите символы на кириллице.")
        flag = false;
      }
    }
    console.log(flag);
    if (flag) {
      const options = {
        method: 'POST',
        body: JSON.stringify(updatedWord)
      };
      fetch(`/api/words/${updatedWord.id}/update`, options).then(response => response.json())
        .then(data => {
          console.log(data)
        });
      alert("Слово изменено!")
      const index = this.wordsApi.findIndex((h) => h.id === updatedWord.id);
      this.wordsApi[index] = updatedWord;
    }
  };


  handlerDelete = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Contept-Type': 'application/json'
      },
    };
    fetch(`/api/words/${id}/delete`, options).then(response => response.json())
      .then(data => {
        console.log(data)
      });
    alert("Слово удалено!")
    this.wordsApi = this.wordsApi.filter((el) => el.id !== id);
  }
}


export default WordsStore;