const loginRedirect = (user: any, isLoading: boolean, router: any) => {
  if (isLoading) return <div>Loading...</div>
  if (!user) {router.push('/')}
}

export default loginRedirect;
