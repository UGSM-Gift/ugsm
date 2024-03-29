import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';

module.exports = function (app: { use: (arg0: string, arg1: RequestHandler) => void }) {
  app.use(
    '/user-profile',
    createProxyMiddleware({
      target: 'https://cloudfront.ugsm.co.kr',
      changeOrigin: true,
    })
  );
};
