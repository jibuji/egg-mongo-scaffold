'use strict';
const User = require('../model/user')
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await new User({name: '李寻欢'}).save()
    const u = await User.findOne().lean().exec()
    ctx.body = 'hi, egg. I am ' + u.name;
  }
}

module.exports = HomeController;
