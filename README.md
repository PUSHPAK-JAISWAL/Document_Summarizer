# Document Summarizer

An intelligent document summarization application powered by Google's Gemini AI. Upload text documents and get instant AI-generated summaries with intelligent chunking for large files.

## Features

### 🔐 User Authentication
- Secure signup and login system
- User session management with localStorage
- Personalized dashboard for each user

### 📄 Document Upload & Processing
- Text file upload support (.txt)
- Intelligent document chunking (500 words per chunk)
- Progress tracking during summarization
- Real-time processing feedback

### 🤖 AI-Powered Summarization
- Powered by Google Gemini 2.0 Flash API
- Automatic chunking for large documents
- Combines multiple chunk summaries into cohesive final summary
- Handles documents of any size efficiently

### 📊 Summary History
- View all previously summarized documents
- Persistent storage of summaries
- Quick access to past summaries
- Organized by date and filename

### 🎨 Modern UI/UX
- Beautiful gradient design system
- Responsive layout for all devices
- Smooth animations and transitions
- Clean, intuitive interface
- Dark mode support

## Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components

### AI Integration
- **Google Gemini 2.0 Flash API** - Document summarization
- Intelligent text chunking algorithm
- Asynchronous API calls for optimal performance

### State Management & Storage
- React Context API for authentication
- localStorage for data persistence
- Custom hooks for state management

### UI Components & Icons
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications

## Installation

```sh
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

## Configuration

Update your Gemini API key in `src/config/gemini.ts`:

```typescript
export const GEMINI_API_KEY = "your-api-key-here";
```

## Usage

1. **Sign Up/Login** - Create an account or login to existing account
2. **Upload Document** - Click "Upload New Document" and select a .txt file
3. **Processing** - Watch the progress as your document is analyzed
4. **View Summary** - Read the AI-generated summary instantly
5. **History** - Access all your previous summaries from the dashboard

## Project Structure

```
src/
├── components/         # React components
│   ├── Auth.tsx       # Authentication forms
│   ├── Dashboard.tsx  # Main dashboard
│   ├── DocumentUpload.tsx  # Upload & processing
│   ├── Landing.tsx    # Landing page
│   ├── SummaryHistory.tsx  # History view
│   └── ui/           # Reusable UI components
├── contexts/         # React contexts
│   └── AuthContext.tsx  # Authentication context
├── config/          # Configuration files
│   └── gemini.ts    # Gemini API configuration
├── pages/           # Page components
└── lib/            # Utility functions
```

## Features in Detail

### Intelligent Chunking
The app automatically splits large documents into manageable chunks of approximately 500 words each. This ensures:
- Consistent API performance
- Better summarization quality
- Progress tracking for users
- Handling of documents of any size

### User Session Management
- Secure authentication flow
- Persistent login sessions
- User-specific summary storage
- Clean logout functionality

## Future Enhancements

- PDF document support
- DOCX file format support
- Export summaries as PDF/TXT
- Summary comparison tools
- Adjustable summary length
- Multi-language support

## License

MIT License
