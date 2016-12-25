/* this module exports an object for accessing messages */
var messages = {
  nextid: 7,
  data: [
    { id: 1, from: 'David Chan', attach: false, subject: 'movie time...', received: '2014-11-11T09:30:00' },
    { id: 2, from: 'Ben Wong', attach: false, subject: 'good books', received: '2015-06-20T09:30:00' },
    { id: 3, from: 'David Chan', attach: true, subject: 'gathering?', received: '2016-09-29T00:00:00' },
    { id: 4, from: 'Ana Mok', attach: false, subject: 'barbecue next week', received: '2016-10-11T00:00:00' },
    { id: 5, from: 'David Chan', attach: true, subject: 'assignment due', received: '2016-10-01T07:30:00' },
    { id: 6, from: 'Zoe Tang', attach: false, subject: 'coming test', received: '2016-10-01T08:00:00' }
  ],

  adjusted: false,

  adjustDate: function() {
    if (this.adjusted) return;
    this.adjusted = true;
    var today = new Date();
    today.setHours(8,0);
    this.data[5].received = today.toISOString();
    today.setHours(6,28);
    this.data[4].received = today.toISOString();
    // start the email generator once
    this.startEmailGenerator();
  },

  randomEmail: function() {
    var from = Math.random() < 0.5 ? 'Ricky Ko' : 'Riley Lam';
    var attach = Math.random() < 0.4;
    var subject = 'random ' + Math.round(Math.random()*10000);
    var received = (new Date()).toISOString();
    var email = { id: this.nextid++, from: from, attach: attach,
       subject: subject, received: received };
    this.data.push(email);
  },

  startEmailGenerator: function() {
    var that = this;
    var timer = setInterval(function() { that.randomEmail(); }, 30000);
  },

  getMessages: function() {
    this.adjustDate();
    return { len: this.data.length, data: this.data };
  },

  deleteMessage: function(del_id) {
    console.log('to delete id ', del_id);
    this.data = this.data.filter(function(elem) { return elem.id !== del_id; })
  }
};