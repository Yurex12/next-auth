export default async function Page() {
  // const session = await auth();

  // if (!session?.user) {
  //   redirect('/login');
  // }

  return (
    <p className='font-bold text-xl'>
      Welcome
      {/* {session.user.name} */}, you are a user
    </p>
  );
}
