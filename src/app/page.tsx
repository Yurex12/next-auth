import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-center px-4 space-y-4'>
      <h1 className='text-4xl font-bold'>Welcome to the homepage</h1>
      <p>
        {/* The more you observe, the more you understand, it comes with a side
        effect, little thing start that you don't like to irritate you and it's
        not nuture, it's nature, your body has already adapted to the things you
        love */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        ullam quaerat quibusdam fuga ut odit molestias officia ratione quod
        incidunt at quae consectetur hic in alias, ex facilis possimus
        molestiae.
      </p>
      <Link
        href='/dashboard'
        className='border px-4 py-2 border-gray-500 rounded-md'
      >
        click me
      </Link>
    </div>
  );
}
