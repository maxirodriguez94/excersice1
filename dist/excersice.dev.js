"use strict";

var Author =
/** @class */
function () {
  function Author() {}

  Author.prototype.setName = function (n) {
    this.name = n;
  };

  Author.prototype.getName = function () {
    return this.name;
  };

  Author.prototype.setSurname = function (s) {
    this.surname = s;
  };

  Author.prototype.getSurname = function (s) {
    return this.surname;
  };

  Author.prototype.setAge = function (a) {
    this.age = a;
  };

  Author.prototype.getAge = function (a) {
    return this.age;
  };

  return Author;
}();

var Note =
/** @class */
function () {
  function Note() {}

  Note.prototype.setName = function (n) {
    this.name = n;
  };

  Note.prototype.getName = function () {
    return this.name;
  };

  Note.prototype.setType = function (t) {
    this.type;
  };

  Note.prototype.getType = function () {
    return this.type;
  };

  Note.prototype.setLanguaje = function (L) {
    this.languaje;
  };

  Note.prototype.getLanguaje = function () {
    return this.languaje;
  };

  return Note;
}();

module.exports = Author;