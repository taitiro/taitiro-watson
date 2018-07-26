'use strict';

const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const assistant = new AssistantV1({
    version: '2018-07-10',
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    url: process.env.URL
});
/*
watsonAssistant.message({
  workspace_id: process.env.ASSISTANT_WORKSPACE,
  input: {'text': 'こんにちは'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
*/
const app = new express();

app.get('/', (req, res) => {
    res.status(200).send('BABELBABELBABEL');
});

app.post('/', (req, res) => {
  const payload = {
    workspace_id: process.env.ASSISTANT_WORKSPACE,
    context: req.body.context || {},
    input: req.body.input || {}
  };

  // Send the input to the assistant service
  assistant.message(payload, (err, data) => {
    if (err) {
      return res.status(err.code || 500).json(err);
    }
    return res.json(data);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
