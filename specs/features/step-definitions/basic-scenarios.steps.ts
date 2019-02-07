import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('../features/firstscenario.feature');

defineFeature(feature, (test) => {
  test('Launching a SpaceX rocket', ({ given, when, then }) => {

    given('I am Elon Musk attempting to launch a rocket into space', () => {
      console.log('hello');
    });

    when('I launch the rocket', () => {
      console.log('hello');
    });

    then('the rocket should end up in space', () => {
      console.log('hello');
    });

    then('the booster(s) should land back on the launch pad', () => {
      console.log('hello');
    });

    then('nobody should doubt me ever again', () => {
      console.log('hello');
    });
  });
});
