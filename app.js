'use strict';

require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const watsonAssistant = new AssistantV1({
    version: '2018-07-10',
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    url: process.env.URL
});

watsonAssistant.message({
  workspace_id: process.env.ASSISTANT_WORKSPACE,
  input: {'text': 'こんにちは'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
