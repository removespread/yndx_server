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