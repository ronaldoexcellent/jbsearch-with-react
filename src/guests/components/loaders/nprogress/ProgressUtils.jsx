import NProgress from 'nprogress';
import './nprogress.css';

// Configure NProgress (optional)
NProgress.configure({ showSpinner: false, minimum: 0.1 });

export const startProgress = () => {
  NProgress.start();
};

export const stopProgress = () => {
  NProgress.done();
};