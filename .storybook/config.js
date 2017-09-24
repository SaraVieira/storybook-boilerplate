import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/counterButton.js');
  require('../stories/placeholder.js');
  require('../stories/pushButton.js');
  require('../stories/randomButton.js');
  require('../stories/wrappedButton.js');
}

configure(loadStories, module);
