
class Mq {
  constructor() {
    this.list = []
    this.index = 1
    this.status = false
  }

  create (fn) {
    return function () {
      return new Promise((resolve, reject) => {
        fn(resolve, reject)
      })
    }
  }

  set (obj) { // {fn, resolve, reject}
    this.list.push({
      ...obj,
      id: this.index++
    })
    if (!this.status) this.next()
  }

  allTask () {
    return this.list
  }

  get () {
    return this.list.shift()
  }

  next () {
    let obj = this.get()
    if (obj) this.current(obj)
    else this.status = false
  }

  current ({fn, resolve, reject}) {
    fn().then((docs) => {
      if (resolve) resolve(docs)
      fn = null
      this.next()
    }).catch(err => {
      if (reject) reject(err)
      fn = null
    })
  }

}



export default Mq
