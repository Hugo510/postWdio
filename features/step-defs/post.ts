import { Given, Then, When } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import PostPage from '../page-obj/post_pagina';

Given('I am on {string}', function (string) {
    return PostPage.open(string);
  });

When('I select {int}', function (int) {
    return PostPage.selectMethod(int);
});

When('I set the {string}', function (string) {
    return PostPage.setEndpoint(string);
});

When('I add {int} parameters', function (int) {
    return PostPage.addParams(int);
});

When('I set the name of the parameters with {string} and {string}', function (string, string2) {
    return PostPage.setParamsName(string, string2);
});

When('I set the value of the parameters with {string} and {string}', function (string, string2) {
    return PostPage.setParamsValue(string, string2);
});

Then('I press the button and get a {int}', function (int) {
    PostPage.performPostRequest();
    return PostPage.verifyStatusCode(int)
});