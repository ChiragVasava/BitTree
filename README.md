# 🌳 BitTree

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/MongoDB-6.19.0-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
</div>

<div align="center">
  <h3>🔗 A modern, beautiful Linktree clone built with Next.js</h3>
  <p>Create your personalized link-in-bio page with stunning glassmorphism design and smooth animations.</p>
</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed
- 🎭 **Dynamic Profiles** - Customizable user profiles with images and descriptions
- 🔗 **Link Management** - Easy-to-manage collection of links and social media
- 🌐 **SEO Optimized** - Built-in SEO features for better discoverability
- 💾 **MongoDB Integration** - Reliable data storage and retrieval
- 🎯 **Handle-based URLs** - Clean, shareable profile URLs
- 🌈 **Beautiful Animations** - Engaging hover effects and transitions

## 🚀 Demo

Visit the live demo: [BitTree Demo](https://your-demo-link.vercel.app)

## 📸 Screenshots

### Homepage
<img width="1920" height="1178" alt="Home" src="https://github.com/user-attachments/assets/6d275233-93e9-455a-b128-992d54e78011" />

### Step-1 Page
<img width="1920" height="869" alt="Step-1" src="https://github.com/user-attachments/assets/dcaad7db-47e7-4182-8b0d-172694a83e45" />

### Step-2 Page
<img width="1920" height="1726" alt="Step-2" src="https://github.com/user-attachments/assets/bf51e521-5ce1-4768-9a21-125da26c4dcc" />

### Step-3 Page
<img width="1920" height="869" alt="Step-3" src="https://github.com/user-attachments/assets/c7233d11-b868-4460-aa3c-509ce26c66f3" />

### User Profile Page
<img width="1920" height="938" alt="UserPage" src="https://github.com/user-attachments/assets/eae67065-6a12-4c0a-b3d9-bf9f05132e5e" />

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TailwindCSS 4
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **Styling:** TailwindCSS with custom animations
- **Notifications:** React Toastify
- **Deployment:** Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)
- Git

### Clone the Repository

```bash
git clone https://github.com/ChiragVasava/BitTree.git
cd BitTree
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
MONGODB_URI="mongodb://localhost:27017/bittree"
NEXT_PUBLIC_HOST="http://localhost:3000"
```

### Database Setup

Make sure MongoDB is running on your system:

```bash
# For local MongoDB
mongod

# The application will automatically create the required collections
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
BitTree/
├── app/
│   ├── [handle]/
│   │   └── page.js          # Dynamic profile pages
│   ├── api/
│   │   └── add/
│   │       └── route.js     # API for adding links
│   ├── generate/
│   │   └── page.js          # Profile creation page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   └── Navbar.js            # Navigation component
├── lib/
│   └── mongodb.js           # MongoDB connection
├── public/                  # Static assets
└── README.md
```

## 🔧 Configuration

### MongoDB Collections

The app uses the following collections:

- `links` - Stores user profiles and their associated links

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/bittree` |
| `NEXT_PUBLIC_HOST` | Your app's host URL | `http://localhost:3000` |

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ChiragVasava/BitTree)

### Deploy on Other Platforms

- **Netlify:** Use the build command `npm run build`
- **Railway:** Connect your GitHub repo and set environment variables
- **Digital Ocean:** Use App Platform with Node.js preset

## 📝 Usage

1. **Create a Profile:** Visit `/generate` to create your BitTree profile
2. **Customize:** Add your profile picture, handle, description, and links
3. **Share:** Your profile will be available at `/{your-handle}`
4. **Manage:** Update your links anytime through the admin interface

## 🎨 Customization

### Styling

The project uses TailwindCSS 4. Customize the design by modifying:

- `app/globals.css` - Global styles and custom animations
- `tailwind.config.js` - TailwindCSS configuration
- Individual component files - Component-specific styles

### Adding Features

- **Analytics:** Integrate with Google Analytics or Vercel Analytics
- **Custom Domains:** Add support for custom domain mapping
- **Themes:** Implement multiple color themes
- **Social Login:** Add OAuth authentication

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chirag Vasava**

- GitHub: [@ChiragVasava](https://github.com/ChiragVasava)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 🙏 Acknowledgments

- Inspired by Linktree
- Built with Next.js and TailwindCSS
- Icons from Lucide React

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/ChiragVasava/BitTree?style=social)
![GitHub forks](https://img.shields.io/github/forks/ChiragVasava/BitTree?style=social)
![GitHub issues](https://img.shields.io/github/issues/ChiragVasava/BitTree)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/ChiragVasava">Chirag Vasava</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
