export default function Post({ params }) {

  const { id } = params

  return (
    <h1>esto es el post {id}</h1>
  )
}