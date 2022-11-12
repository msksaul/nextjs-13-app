import { Counter } from './posts/Counter';

export default function PostsLayout({ children }) {
  return (
    <div>
      <Counter />
      <marquee>Home &bull; Posts</marquee>
      {children}
    </div>
  )
}