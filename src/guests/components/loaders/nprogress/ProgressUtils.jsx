import NProgress from 'nprogress';
import './nprogress.css';

// Configure NProgress (optional)
NProgress.configure({ showSpinner: true, minimum: 0.1 });

export const startProgress = () => {
  NProgress.start();
};

export const stopProgress = () => {
  NProgress.done();
};