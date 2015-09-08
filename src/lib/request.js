import superagent from 'superagent';
import agentPromise from 'superagent-promise';

export default agentPromise(superagent, Promise);
