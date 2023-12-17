import _ from 'lodash';
window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// process Echo from 'laravel-echo';

// process Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.meta.env.MIX_PUSHER_APP_KEY,
//     wsHost: process.meta.env.MIX_PUSHER_HOST ?? `ws-${process.meta.env.MIX_PUSHER_CLUSTER}.pusher.com`,
//     wsPort: process.meta.env.MIX_PUSHER_PORT ?? 80,
//     wssPort: process.meta.env.MIX_PUSHER_PORT ?? 443,
//     forceTLS: (process.meta.env.MIX_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });