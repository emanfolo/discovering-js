const User = require('./user');

const user1 = new User("Kirstie")

describe('user', ()=> {
  describe('getName', ()=> {
    it('returns the name of a user', () => {
      expect(typeof(user1.getName()) == 'string').toBe(true)
  });
    it('returns the specific name of a user', () => {
      expect(user1.getName()).toBe("Kirstie")
  });
})
})





