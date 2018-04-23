
class Mq {
  constructor(x, y) {
    this.list = []
    this.status = false
  }

  set (fn) {
    this.list.push(fn)
    if (!this.status) this.next()
  }
  getAllTask () {
    return this.list
  }
  get () {
    let next = this.list.shift()
    return next
  }
  next () {
    let n = this.get()
    if (n) this.current(n)
    else this.status = false
  }
  current (fn) {
    fn().then(() => {
      fn = null
      this.next()
    }).catch(err => {
      console.log(err)
      fn = null
    })
  }
}



export default Mq
