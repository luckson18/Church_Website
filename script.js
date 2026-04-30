/* ============================================================
   GRACE FELLOWSHIP CHURCH — script.js
   All dynamic content is managed through the arrays below.
   ADMIN: Edit these arrays to update your website content.
============================================================ */

/* ============================================================
   ██████  ADMIN CONTENT — EDIT EVERYTHING BELOW ██████
============================================================ */

// ============================================================
// ADMIN: CHURCH LEADERSHIP
// Fields: name, role, bio, image (URL or path like "images/pastor-john.jpg")
// ============================================================
const LEADERS = [
  {
    name: "Pastor David Johnson",
    role: "Senior Pastor",
    bio: "David has served Grace Fellowship for over 20 years with a heart for discipleship and community transformation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Mary Johnson",
    role: "Co-Pastor / Women's Ministry",
    bio: "Mary leads our women's ministry and pastoral care team with wisdom, compassion, and grace.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Elder Samuel Osei",
    role: "Executive Elder",
    bio: "Samuel oversees church governance and administration, bringing over 15 years of ministry leadership.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Pastor Rachel Kim",
    role: "Youth Pastor",
    bio: "Rachel is passionate about empowering the next generation to live boldly for Christ.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80"
  }
];

// ============================================================
// ADMIN: ANNOUNCEMENTS
// Fields: title, body, date, badge ("general" | "urgent" | "event")
// ============================================================
const ANNOUNCEMENTS = [
  {
    title: "Easter Sunday Celebration 🌸",
    body: "Join us for a special Easter Sunday service on April 20th. We will have two special services at 8:00 AM and 10:30 AM with live worship, communion, and a powerful message. Invite a friend!",
    date: "April 10, 2025",
    badge: "event"
  },
  {
    title: "Annual Church Picnic — Register Now",
    body: "Our beloved church family picnic is back! Join us at Riverside Park on May 3rd from 12 PM – 5 PM. Games, food, and fellowship for all ages. Please sign up at the welcome desk.",
    date: "April 8, 2025",
    badge: "general"
  },
  {
    title: "⚠ Building Fund Drive — Goal: $50,000",
    body: "We are raising funds for urgent roof repairs and HVAC upgrades for our main sanctuary. As of today we have raised $28,000. Every gift matters — give at the welcome desk or online.",
    date: "April 5, 2025",
    badge: "urgent"
  },
  {
    title: "New Wednesday Bible Study Series",
    body: "Starting April 16th, Pastor David will lead a 6-week series through the book of Romans every Wednesday at 7 PM. All are welcome — no prior sign-up required.",
    date: "April 3, 2025",
    badge: "general"
  },
  {
    title: "Children's Ministry Volunteers Needed",
    body: "We are looking for warm-hearted volunteers to serve in our nursery and children's church every Sunday. Training provided. Please contact Pastor Rachel or the church office.",
    date: "March 30, 2025",
    badge: "general"
  },
  {
    title: "Community Food Drive — Drop Off This Sunday",
    body: "We're partnering with the Springfield Food Bank for our quarterly food drive. Please bring non-perishable items this Sunday. Collection boxes are at all building entrances.",
    date: "March 27, 2025",
    badge: "event"
  }
];

// ============================================================
// ADMIN: GALLERY IMAGES
// Replace URLs with your own image paths, e.g. "images/worship-night.jpg"
// ============================================================
const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&auto=format&fit=crop", caption: "Sunday Morning Worship" },
  { src: "https://images.unsplash.com/photo-1574121862568-49e76e8e53d1?w=600&auto=format&fit=crop", caption: "Community Outreach 2024" },
  { src: "https://images.unsplash.com/photo-1559523161-0fc0d8b4ddcf?w=600&auto=format&fit=crop", caption: "Youth Camp Summer 2024" },
  { src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&auto=format&fit=crop", caption: "Easter Sunrise Service" },
  { src: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600&auto=format&fit=crop", caption: "Annual Church Picnic" },
  { src: "https://images.unsplash.com/photo-1593032464873-0cfbedcd2f56?w=600&auto=format&fit=crop", caption: "Women's Retreat 2024" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop", caption: "Children's Christmas Play" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&auto=format&fit=crop", caption: "Men's Conference" },
  { src: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&auto=format&fit=crop", caption: "Baptism Sunday" }
];

// ============================================================
// ADMIN: VIDEOS
// For YouTube: get embed URL from: Share → Embed → copy src value
// ============================================================
const VIDEOS = [
  {
    title: "Sunday Sermon — April 6, 2025",
    description: "\"Walking in the Spirit\" — Pastor David Johnson",
    // ADMIN: Replace with your actual YouTube embed URL
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Easter Worship Night — Live Recording",
    description: "Full worship set from our 2025 Easter Night of Praise",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Youth Sunday Recap — March 2025",
    description: "Highlights from our Youth Sunday celebration",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// ============================================================
// ADMIN: SERMONS
// Fields: title, speaker, date, scripture, description,
//         audioUrl (optional), videoUrl (optional)
// Leave audioUrl/videoUrl as "" to hide those buttons
// ============================================================
const SERMONS = [
  {
    title: "Walking in the Spirit",
    speaker: "Pastor David Johnson",
    date: "April 6, 2025",
    scripture: "Galatians 5:16–25",
    description: "In this message, Pastor David unpacks what it truly means to walk by the Spirit daily — not as an occasional experience but as a continuous lifestyle of surrender and trust.",
    audioUrl: "audio/sermon-apr6.mp3",  // ADMIN: Replace with actual audio file path
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "The Grace That Sustains",
    speaker: "Elder Samuel Osei",
    date: "March 30, 2025",
    scripture: "2 Corinthians 12:9",
    description: "Elder Samuel delivers a powerful word on the sufficiency of God's grace in our moments of weakness, drawing from his own personal testimony of breakthrough.",
    audioUrl: "audio/sermon-mar30.mp3",
    videoUrl: ""
  },
  {
    title: "Unshakeable Faith",
    speaker: "Pastor David Johnson",
    date: "March 23, 2025",
    scripture: "Hebrews 11:1–6",
    description: "What does it look like to have faith that endures through every storm? This sermon examines the lives of the great 'faith heroes' of Hebrews 11 and what we can learn today.",
    audioUrl: "audio/sermon-mar23.mp3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Raising the Next Generation",
    speaker: "Pastor Rachel Kim",
    date: "March 16, 2025",
    scripture: "Deuteronomy 6:4–9",
    description: "Pastor Rachel brings a timely and practical message on how parents, mentors, and the church can intentionally pass faith to the next generation.",
    audioUrl: "",
    videoUrl: ""
  },
  {
    title: "The Heart of Worship",
    speaker: "Pastor David Johnson",
    date: "March 9, 2025",
    scripture: "John 4:23–24",
    description: "True worship goes far beyond Sunday morning. In this message, we explore what Jesus meant when He said the Father seeks worshippers who worship in spirit and in truth.",
    audioUrl: "audio/sermon-mar9.mp3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// ============================================================
// ADMIN: EVENTS
// Fields: title, day, month, time, location, description
// ============================================================
const EVENTS = [
  {
    title: "Easter Sunday Celebration",
    day: "20",
    month: "Apr",
    time: "8:00 AM & 10:30 AM",
    location: "Main Sanctuary",
    description: "A glorious celebration of the resurrection of our Lord Jesus Christ. Special worship, communion, and a message of hope. Invite family and friends!"
  },
  {
    title: "Good Friday Service",
    day: "18",
    month: "Apr",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "A solemn and reflective service as we remember the sacrifice of Christ on the cross. Includes scripture readings, worship, and the Lord's Supper."
  },
  {
    title: "Wednesday Bible Study — Romans",
    day: "16",
    month: "Apr",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Week 1 of our 6-week journey through the book of Romans with Pastor David. Open to all — no registration needed. Bring your Bible!"
  },
  {
    title: "Women's Prayer Breakfast",
    day: "26",
    month: "Apr",
    time: "9:00 AM",
    location: "Church Dining Room",
    description: "Ladies, join us for a morning of prayer, encouragement, and fellowship over breakfast. Led by Co-Pastor Mary Johnson. RSVP at the welcome desk."
  },
  {
    title: "Annual Church Picnic",
    day: "3",
    month: "May",
    time: "12:00 PM – 5:00 PM",
    location: "Riverside Park",
    description: "Our much-loved church family picnic! Games, food trucks, bounce house for the kids, and live music. A day for all ages. Sign up to bring a dish to share!"
  },
  {
    title: "Men's Accountability Breakfast",
    day: "10",
    month: "May",
    time: "7:30 AM",
    location: "Café Grace (Church Lobby)",
    description: "Men, come for a hearty breakfast and real talk. This month's topic: 'Leading Your Home with Integrity.' Led by Elder Samuel Osei."
  }
];

/* ============================================================
   ██████  END OF ADMIN CONTENT ██████
   Do not edit below unless you know what you're doing.
============================================================ */


// ============================================================
// INIT — runs when the page loads
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  feather.replace(); // initialize Feather Icons

  renderLeadership();
  renderAnnouncements();
  renderGallery();
  renderVideos();
  renderSermons();
  renderEvents();
  renderEventsPreview();
  initNav();
  initMobileMenu();
  initGalleryTabs();
  initLightbox();
  initContactForm();
  initScrollReveal();
  initBackToTop();
  setFooterYear();
});


// ============================================================
// RENDER LEADERSHIP
// ============================================================
function renderLeadership() {
  const grid = document.getElementById("leadership-grid");
  if (!grid) return;
  grid.innerHTML = LEADERS.map(leader => `
    <div class="leader-card reveal">
      <img src="${leader.image}" alt="${leader.name}" class="leader-img" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x300?text=Photo'" />
      <div class="leader-info">
        <h4>${leader.name}</h4>
        <span class="leader-role">${leader.role}</span>
        <p class="leader-bio">${leader.bio}</p>
      </div>
    </div>
  `).join("");
  feather.replace();
}


// ============================================================
// RENDER ANNOUNCEMENTS
// ============================================================
function renderAnnouncements() {
  const grid = document.getElementById("announcements-grid");
  if (!grid) return;
  grid.innerHTML = ANNOUNCEMENTS.map(ann => `
    <div class="announcement-card reveal">
      <span class="ann-badge ${ann.badge}">${getBadgeLabel(ann.badge)}</span>
      <h3>${ann.title}</h3>
      <p>${ann.body}</p>
      <span class="ann-date">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        ${ann.date}
      </span>
    </div>
  `).join("");
}

function getBadgeLabel(badge) {
  const labels = { general: "General", urgent: "🔴 Urgent", event: "📅 Event" };
  return labels[badge] || "General";
}


// ============================================================
// RENDER GALLERY (Photos)
// ============================================================
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = GALLERY_IMAGES.map((img, index) => `
    <div class="gallery-item reveal" data-index="${index}" role="button" tabindex="0"
         aria-label="View ${img.caption}">
      <img src="${img.src}" alt="${img.caption}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/400x300?text=Image'" />
      <div class="gallery-item-overlay">
        <span>${img.caption}</span>
      </div>
    </div>
  `).join("");

  // attach click events after render
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openLightbox(parseInt(item.dataset.index)));
    item.addEventListener("keydown", e => { if (e.key === "Enter") openLightbox(parseInt(item.dataset.index)); });
  });
}


// ============================================================
// RENDER VIDEOS
// ============================================================
function renderVideos() {
  const videoGrid = document.getElementById("video-grid");
  if (!videoGrid) return;
  videoGrid.innerHTML = VIDEOS.map(v => `
    <div class="video-card reveal">
      <div class="video-embed">
        <iframe src="${v.embedUrl}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.description}</p>
      </div>
    </div>
  `).join("");
}


// ============================================================
// RENDER SERMONS
// ============================================================
function renderSermons() {
  const list = document.getElementById("sermons-list");
  if (!list) return;
  list.innerHTML = SERMONS.map(s => `
    <div class="sermon-card reveal">
      <div class="sermon-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      </div>
      <div class="sermon-info">
        <h3>${s.title}</h3>
        <div class="sermon-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${s.date}
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${s.speaker}
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            ${s.scripture}
          </span>
        </div>
        <p>${s.description}</p>
      </div>
      <div class="sermon-actions">
        ${s.audioUrl ? `<a href="${s.audioUrl}" class="sermon-btn gold" download>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
          Audio
        </a>` : ""}
        ${s.videoUrl ? `<a href="${s.videoUrl}" class="sermon-btn" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
          Watch
        </a>` : ""}
      </div>
    </div>
  `).join("");
}


// ============================================================
// RENDER EVENTS
// ============================================================
function renderEvents() {
  const list = document.getElementById("events-list");
  if (!list) return;
  list.innerHTML = EVENTS.map(ev => `
    <div class="event-card reveal">
      <div class="event-date-block">
        <span class="day">${ev.day}</span>
        <span class="month">${ev.month}</span>
      </div>
      <div class="event-details">
        <h3>${ev.title}</h3>
        <div class="event-meta">
          <span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${ev.time}
          </span>
          <span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${ev.location}
          </span>
        </div>
        <p>${ev.description}</p>
      </div>
    </div>
  `).join("");
}


// ============================================================
// RENDER EVENTS PREVIEW (Home section — shows first 3)
// ============================================================
function renderEventsPreview() {
  const grid = document.getElementById("events-preview-grid");
  if (!grid) return;
  const preview = EVENTS.slice(0, 3);
  grid.innerHTML = preview.map(ev => `
    <div class="event-preview-card reveal">
      <div class="event-date-badge">
        <span class="day">${ev.day}</span>
        <span class="month">${ev.month}</span>
      </div>
      <div class="event-preview-info">
        <h4>${ev.title}</h4>
        <p>${ev.time} · ${ev.location}</p>
      </div>
    </div>
  `).join("");
}


// ============================================================
// NAVIGATION — sticky + active link highlight
// ============================================================
function initNav() {
  const header = document.getElementById("site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = getCurrentPage();

  // Sticky nav on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mark active nav item for multipage navigation.
  navLinks.forEach(link => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("active", isSamePageLink(href, currentPage));
  });

  // Smooth scroll only for same-page hash links.
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      const targetId = href.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) return;

      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Intersection-based active link only applies to one-page hash nav.
  const hashLinks = Array.from(navLinks).filter(link => {
    const href = link.getAttribute("href") || "";
    return href.startsWith("#");
  });
  if (!hashLinks.length) return;

  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        hashLinks.forEach(l => {
          const href = l.getAttribute("href") || "";
          l.classList.toggle("active", href === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}


// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger   = document.getElementById("hamburger");
  const mobileMenu  = document.getElementById("mobile-menu");
  const overlay     = document.getElementById("mobile-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openMenu() {
    mobileMenu.classList.add("open");
    overlay.classList.add("open");
    hamburger.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href") || "";
      const isHash = href.startsWith("#");

      if (isHash) {
        e.preventDefault();
      }

      const targetId = isHash ? href.slice(1) : "";
      const target = targetId ? document.getElementById(targetId) : null;
      closeMenu();

      if (target && isHash) {
        setTimeout(() => {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 350);
      }
    });
  });
}


// ============================================================
// GALLERY TABS (Photos / Videos toggle)
// ============================================================
function initGalleryTabs() {
  const tabs        = document.querySelectorAll(".gallery-tab");
  const galleryGrid = document.getElementById("gallery-grid");
  const videoSection= document.getElementById("video-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      if (tab.dataset.tab === "photos") {
        galleryGrid.classList.remove("hidden");
        videoSection.classList.add("hidden");
      } else {
        galleryGrid.classList.add("hidden");
        videoSection.classList.remove("hidden");
        // Re-init reveal for videos
        triggerReveal();
      }
    });
  });
}


// ============================================================
// LIGHTBOX
// ============================================================
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const img     = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const item    = GALLERY_IMAGES[currentLightboxIndex];
  img.src       = item.src;
  img.alt       = item.caption;
  caption.textContent = item.caption;
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);

  document.getElementById("lightbox-prev").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    updateLightboxImage();
  });

  document.getElementById("lightbox-next").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_IMAGES.length;
    updateLightboxImage();
  });

  // Close on backdrop click
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  document.getElementById("lightbox-prev").click();
    if (e.key === "ArrowRight") document.getElementById("lightbox-next").click();
  });
}

function getCurrentPage() {
  const path = window.location.pathname;
  const raw = path.substring(path.lastIndexOf("/") + 1);
  return raw || "index.html";
}

function isSamePageLink(href, currentPage) {
  if (!href || href.startsWith("#")) return false;
  if (href === "./") return currentPage === "index.html";
  return href.toLowerCase() === currentPage.toLowerCase();
}


// ============================================================
// CONTACT FORM — frontend validation + success message
// ============================================================
function initContactForm() {
  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name    = form.querySelector("#name").value.trim();
    const email   = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Simulate form submission (no backend — replace with your email service if needed)
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending…";
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      success.classList.remove("hidden");
      btn.textContent = "Send Message";
      btn.disabled = false;
      setTimeout(() => success.classList.add("hidden"), 6000);
    }, 1200);
  });
}


// ============================================================
// SCROLL REVEAL — animate elements into view
// ============================================================
function initScrollReveal() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// Re-trigger reveal for dynamically shown elements
function triggerReveal() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}


// ============================================================
// BACK TO TOP BUTTON
// ============================================================
function initBackToTop() {
  const btn = document.getElementById("back-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


// ============================================================
// FOOTER — auto year
// ============================================================
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}
