import { faker, fakerRU } from '@faker-js/faker';

// Новый пользователь для регистрации
export function generateUser() {
  return {
    firstName: fakerRU.person.firstName(),
    lastName: fakerRU.person.lastName(),
    /* Date.now() гарантирует уникальный email при каждом запуске, 
    но все пойдет на почту aex, для своей почты просто вставьте свои
    НО тогда не комитеть это, чтобы не слетело у меня, лучше в гитигнор закинуть
    */
email: `aextester+${faker.string.alpha({ length: 6, casing: 'lower' })}@gmail.com`,
    password: faker.internet.password({ length: 12 }),
    phone: '+79' + faker.string.numeric(9),
    city: fakerRU.location.city(),
  };
}

// Случайный текст, например для комментария
export function generateComment() {
  return fakerRU.lorem.sentence();
}