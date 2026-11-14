
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <nav class="navbar container">
      <a href="#" class="brand">
        <span class="brand-icon">S</span>
        <span>Study<span class="brand-highlight">Mate</span></span>
      </a>

      <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation" aria-expanded="false">
        ☰
      </button>

      <div class="nav-links" id="nav-links">
        <a href="#home" class="active">Home</a>
        <a href="#resources">Explore Resources</a>
        <a href="#teachers">For Teachers</a>
        <a href="#about">About</a>
      </div>

      <div class="nav-actions">
        <a href="#signin" class="sign-in">Sign In</a>
        <a href="#signup" class="btn btn-primary nav-cta">Get Started</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero-section" id="home">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="eyebrow">
            <span class="eyebrow-dot"></span>
            YOUR LEARNING JOURNEY STARTS HERE
          </span>

          <h1>
            Learn Without Limits.<br />
            <span>Grow Without Boundaries.</span>
          </h1>

          <p class="hero-description">
            Discover quality learning materials, explore new skills,
            and connect with educators. Everything you need to learn
            and teach, all in one place.
          </p>

          <form class="search-form" id="search-form">
            <span class="search-icon">⌕</span>
            <input
              type="search"
              id="resource-search"
              placeholder="What would you like to learn today?"
              aria-label="Search learning resources"
            />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>

          <div class="hero-actions">
            <a href="#resources" class="btn btn-primary">Explore Resources <span>→</span></a>
            <a href="#teachers" class="btn btn-outline">I'm a Teacher</a>
          </div>

          <div class="hero-trust">
            <span class="trust-icon">✓</span>
            Free to access at launch
            <span class="trust-separator">•</span>
            Learning for everyone
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-decoration decoration-one"></div>
          <div class="visual-decoration decoration-two"></div>

          <div class="learning-card">
            <div class="card-top">
              <div>
                <span class="small-label">YOUR LEARNING SPACE</span>
                <h3>Keep growing!</h3>
              </div>
              <span class="card-emoji">📚</span>
            </div>

            <div class="progress-panel">
              <div class="progress-heading">
                <span>Learning journey</span>
                <strong>Explore more</strong>
              </div>
              <div class="progress-track">
                <div class="progress-value"></div>
              </div>
              <span class="progress-caption">Every step takes you forward.</span>
            </div>

            <div class="quick-resources">
              <div class="quick-resource">
                <span class="resource-icon blue-icon">📖</span>
                <div>
                  <strong>Study materials</strong>
                  <small>Notes and textbooks</small>
                </div>
                <span class="resource-arrow">→</span>
              </div>

              <div class="quick-resource">
                <span class="resource-icon orange-icon">🎓</span>
                <div>
                  <strong>Online learning</strong>
                  <small>Courses and lessons</small>
                </div>
                <span class="resource-arrow">→</span>
              </div>

              <div class="quick-resource">
                <span class="resource-icon green-icon">👩‍🏫</span>
                <div>
                  <strong>Teacher resources</strong>
                  <small>Tools for educators</small>
                </div>
                <span class="resource-arrow">→</span>
              </div>
            </div>
          </div>

          <div class="floating-note note-top">
            <span>🌍</span>
            <div>
              <strong>Learn globally</strong>
              <small>Start anywhere</small>
            </div>
          </div>

          <div class="floating-note note-bottom">
            <span>✨</span>
            <div>
              <strong>Your future matters</strong>
              <small>Keep discovering</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="audience-strip" id="about">
      <div class="container audience-grid">
        <div>
          <span class="audience-icon">🎒</span>
          <div>
            <strong>For Learners</strong>
            <p>Discover knowledge and build skills.</p>
          </div>
        </div>
        <div>
          <span class="audience-icon">👩‍🏫</span>
          <div>
            <strong>For Teachers</strong>
            <p>Share knowledge and teaching materials.</p>
          </div>
        </div>
        <div>
          <span class="audience-icon">🌍</span>
          <div>
            <strong>For Everyone</strong>
            <p>Make learning accessible everywhere.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="categories-section" id="resources">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">EXPLORE AND DISCOVER</span>
            <h2>What would you like to learn?</h2>
            <p>Find resources that match your educational journey.</p>
          </div>
          <a href="#all-resources" class="text-link">View all resources →</a>
        </div>

        <div class="category-grid">
          <a href="#primary" class="category-card category-blue">
            <span class="category-icon">🧒</span>
            <span class="category-label">01 / SCHOOL</span>
            <h3>Primary Education</h3>
            <p>Build strong foundations through engaging learning materials.</p>
            <span class="category-link">Explore category →</span>
          </a>

          <a href="#secondary" class="category-card category-orange">
            <span class="category-icon">📐</span>
            <span class="category-label">02 / SCHOOL</span>
            <h3>Secondary Education</h3>
            <p>Study smarter with notes, revision materials and practice.</p>
            <span class="category-link">Explore category →</span>
          </a>

          <a href="#university" class="category-card category-purple">
            <span class="category-icon">🎓</span>
            <span class="category-label">03 / HIGHER EDUCATION</span>
            <h3>College & University</h3>
            <p>Explore academic resources and expand your knowledge.</p>
            <span class="category-link">Explore category →</span>
          </a>

          <a href="#professional" class="category-card category-green">
            <span class="category-icon">💻</span>
            <span class="category-label">04 / LIFELONG LEARNING</span>
            <h3>Professional Skills</h3>
            <p>Learn practical skills for your career and personal growth.</p>
            <span class="category-link">Explore category →</span>
          </a>
        </div>
      </div>
    </section>

    <section class="teacher-section" id="teachers">
      <div class="container teacher-panel">
        <div class="teacher-content">
          <span class="eyebrow teacher-eyebrow">FOR EDUCATORS</span>
          <h2>Great teachers make great futures.</h2>
          <p>
            Share your knowledge, discover teaching resources,
            and become part of a community that makes education
            more accessible.
          </p>
          <a href="#teacher-signup" class="btn btn-light">Discover the Teacher Hub →</a>
        </div>
        <div class="teacher-illustration">
          <div class="teacher-circle">👩‍🏫</div>
          <span class="teacher-star star-one">✦</span>
          <span class="teacher-star star-two">✧</span>
          <div class="teacher-mini-card">
            <span>📚</span>
            <div>
              <strong>Share knowledge</strong>
              <small>Inspire learners everywhere</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section">
      <div class="container mission-content">
        <span class="eyebrow">OUR MISSION</span>
        <h2>Education should have no boundaries.</h2>
        <p>
          StudyMate is building a learning community where students,
          teachers and lifelong learners can discover opportunities,
          exchange knowledge and grow together.
        </p>
        <a href="#signup" class="text-link">Be part of the journey →</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <a href="#home" class="brand footer-brand">
        <span class="brand-icon">S</span>
        <span>Study<span class="brand-highlight">Mate</span></span>
      </a>
      <p>Learn Without Limits.</p>
      <span class="copyright">© ${new Date().getFullYear()} StudyMate. All rights reserved.</span>
    </div>
  </footer>
`

// Mobile navigation
const menuToggle = document.querySelector('#menu-toggle')
const navLinks = document.querySelector('#nav-links')

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav-open')
  menuToggle.setAttribute('aria-expanded', isOpen)
  menuToggle.textContent = isOpen ? '✕' : '☰'
})

// Close mobile navigation after selecting a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.textContent = '☰'
  })
})

// Resource search
document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault()

  const searchInput = document.querySelector('#resource-search')
  const searchTerm = searchInput.value.trim()

  if (!searchTerm) {
    searchInput.focus()
    return
  }

  alert(`Resource search for "${searchTerm}" will be available when we build the StudyMate resource system.`)
})
