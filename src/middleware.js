export default function middleware() {
  console.log('ok')
}

export const config = {
    matcher: '/users/:path*',
}