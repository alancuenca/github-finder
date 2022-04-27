function About() {
    return(
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
        Search GitHub profiles and see profile details. 
        <br></br>
        <a href='https://github.com/alancuenca/github-finder'>
          {' '}
          Link to the github repo.
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
      </p>
        </div>
    )
}

export default About