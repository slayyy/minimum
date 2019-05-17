
export default {

  getAllArticles: () => {
    
    return new Promise ((resolve) => {
      fetch('http://blog.etherial.fr/articles')
      .then((res) => {
        res.json().then((json) => {
          resolve(json.data)
        })
      })
    })
  },

  getArticle: (id) =>{
    return new Promise ((resolve) => {
      fetch('http://blog.etherial.fr/articles/'+id)
      .then((res) => {
        res.json().then((json) => {
          resolve(json.data)
        })
      })
    })
  },

  getCategory: () => {
    return new Promise((resolve) => {
      fetch('http://blog.etherial.fr/articles/categories')
      .then((res) => {
        res.json().then((json) => {
          resolve(json.data)
        })
      })
    })
  },

  postArticle: (title,content,id) => {
    const data = {
      title: title,
      content: content,
      article_category_id: id
    }
    fetch('http://blog.etherial.fr/articles', {
      method: 'POST',
      headers: {
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
  },

  newUser: (firstname, lastname, email, password, password_verif) => {

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password_verif: password_verif,
    }

    fetch('http://blog.etherial.fr/users', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })
  },

  login: (email, pass) => {
    return new Promise((resolve) => {
      fetch('http://blog.etherial.fr/auth', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          email: email,
          password: pass,
        })
      }).then((res) => {
        res.json().then((json) => {
          if(json.status < 400) {
            localStorage.setItem("token", json.data.token)
            resolve()
          }
        })
      })
    })
  },

  profile: () => {
    return new Promise((resolve) => {
      fetch('http://blog.etherial.fr/users/me', {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      }).then((res) => {
        res.json().then((json) => {
          resolve(json.data)
        })
      })
    })
  },

  updateProfile: (first, last, birth) => {
    const data = {
      firstname: first,
      lastname: last,
      birthdate: birth
    }
    fetch('http://blog.etherial.fr/users/me', {
      method: 'PUT',
      headers: {
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
  },

  updatePassword: (old, newPass, verifPass) => {
    const data = {
      password_old: old,
      password_new: newPass,
      password_new_verif: verifPass
    }

    fetch('http://blog.etherial.fr/users/me/password', {
      method: 'PUT',
      headers: {
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    })
  }



}