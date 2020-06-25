class Person {

}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {

  }
}

class Backend extends Member {
  canCreateBackend() {

  }
}

class PersonFromDefferentCompany extends Guest {
  access() {
    throw new Error('У тебя нет доступа! Иди к себе!')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDefferentCompany()) // There should be member