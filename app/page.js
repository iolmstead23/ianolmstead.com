import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Fade duration='10000'>
        <p>GeeksforGeeks - Text</p>
      </Fade>
      <Flip>
        <p>Second Text</p>
      </Flip>
      <Bounce>
        <p>Third Text</p>
      </Bounce>
    </div>
  )
}
