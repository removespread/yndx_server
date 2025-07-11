import { faker } from '@faker-js/faker';

export const ValidUserData = {
    email: "v@removespread.ru",
    password: "Qwerty123",
};

export const FakeUserData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
}

export const FakeEmail = faker.internet.email();
export const FakePassword = faker.internet.password();
export const FakeAge = faker.number.int({ min: 1, max: 100 }).toString();