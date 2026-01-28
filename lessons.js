const lessons = [
  // MODULE 1: Understanding the Internet (Start Here)
  {
    id: 1,
    title: "What is Web1?",
    module: "MODULE 1: Understanding the Internet",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 1: Understanding the Internet</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">What is Web1?</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Let's start at the very beginning. Before we talk about Web3, you need to understand <strong>how the internet evolved</strong>.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Web1: The Read-Only Internet (1990s - early 2000s)</h2>
        <p class="text-blue-100 mb-4">
          Imagine the early internet like a <strong>digital library</strong>. You could:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Visit websites and read information</li>
          <li>Look at pictures and text</li>
          <li>Click links to go to other pages</li>
        </ul>

        <p class="text-blue-100 mb-6">
          But that's it. You couldn't comment, like, share, or upload your own content. You were just a <strong>visitor</strong>, not a participant.
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Web1 Examples</h3>
          <ul class="list-disc list-inside text-blue-100 space-y-2">
            <li>Early news websites (CNN.com, BBC)</li>
            <li>Company websites with basic info</li>
            <li>Personal blogs (but you couldn't comment)</li>
            <li>Online encyclopedias</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Key Point</h2>
        <p class="text-blue-100 mb-6">
          Web1 was <strong>one-way</strong>. Companies and website owners created content. You just consumed it. Like reading a newspaper, but on a computer screen.
        </p>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <p class="text-blue-100 text-center text-lg">
            <strong>Web1 = Read-Only Internet</strong>
          </p>
        </div>
      </div>
    `,
    quiz: {
      question: "What was the main characteristic of Web1?",
      options: [
        "Users could create and share content freely",
        "Users could only read and view content, not create it",
        "Users owned all the websites they visited",
        "Users needed special permission to access websites"
      ],
      correctIndex: 1
    }
  },

  {
    id: 2,
    title: "What is Web2?",
    module: "MODULE 1: Understanding the Internet",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 1: Understanding the Internet</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">What is Web2?</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Web2 is the internet <strong>you use every day right now</strong>. It changed everything.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Web2: The Read + Write Internet (2000s - Today)</h2>
        <p class="text-blue-100 mb-4">
          With Web2, you became more than just a visitor. You became a <strong>creator</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Post photos and videos (Instagram, TikTok, YouTube)</li>
          <li>Write posts and comments (Facebook, Twitter/X)</li>
          <li>Share opinions and reviews (Yelp, Amazon)</li>
          <li>Upload files and documents (Google Drive, Dropbox)</li>
          <li>Send messages instantly (WhatsApp, Messenger)</li>
        </ul>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Web2 Examples You Use Daily</h3>
          <ul class="list-disc list-inside text-blue-100 space-y-2">
            <li><strong>Social media:</strong> Facebook, Instagram, Twitter, TikTok</li>
            <li><strong>Shopping:</strong> Amazon, eBay, Shopify stores</li>
            <li><strong>Entertainment:</strong> YouTube, Netflix, Spotify</li>
            <li><strong>Communication:</strong> WhatsApp, Gmail, Zoom</li>
            <li><strong>Rides & delivery:</strong> Uber, DoorDash</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">But There's a Catch...</h2>
        <p class="text-blue-100 mb-4">
          In Web2, you can create content, but <strong>you don't own the platform or your data</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Facebook owns all your photos and posts</li>
          <li>Instagram can change their algorithm anytime</li>
          <li>YouTube can delete your channel</li>
          <li>Uber sets the prices and takes a big cut</li>
          <li>Your data is sold to advertisers</li>
        </ul>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">The Big Problem</h3>
          <p class="text-blue-100">
            <strong>You are the product.</strong> These companies give you "free" services, but they make billions by selling your data and showing you ads. You create the content, they make the money.
          </p>
        </div>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <p class="text-blue-100 text-center text-lg">
            <strong>Web2 = Read + Write Internet<br/>(But companies control everything)</strong>
          </p>
        </div>
      </div>
    `,
    quiz: {
      question: "Who owns your Instagram account data?",
      options: [
        "You own it completely",
        "Instagram (Meta) owns it",
        "The government owns it",
        "Everyone on the internet owns it"
      ],
      correctIndex: 1
    }
  },

  // MODULE 2: The Problem Web2 Couldn't Solve
  {
    id: 3,
    title: "The Trust Problem",
    module: "MODULE 2: The Problem Web2 Couldn't Solve",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 2: The Problem Web2 Couldn't Solve</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">The Trust Problem</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          In Web2 (and in the regular world), <strong>you must trust middlemen</strong> to make things work.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Who Are These Middlemen?</h2>
        
        <div class="space-y-6 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2 text-cyan-300">🏦 Banks</h3>
            <p class="text-blue-100 text-sm">
              You trust your bank to hold your money safely and process your payments. But they charge fees, can freeze your account, and sometimes fail.
            </p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2 text-cyan-300">🏢 Companies</h3>
            <p class="text-blue-100 text-sm">
              You trust Facebook to keep your data private. You trust Amazon to deliver your package. But they can change the rules anytime.
            </p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2 text-cyan-300">🏛️ Governments</h3>
            <p class="text-blue-100 text-sm">
              You trust your government to manage your currency. But they can print more money (causing inflation) or freeze your assets.
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Happens When Trust Breaks?</h2>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Banks collapse (2008 financial crisis)</li>
          <li>Platforms ban users without warning</li>
          <li>Your data gets hacked or sold</li>
          <li>Governments devalue currency</li>
          <li>Middlemen take huge fees</li>
        </ul>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Real Example</h3>
          <p class="text-blue-100 mb-3">
            In 2022, a crypto exchange called FTX collapsed overnight. People who "trusted" the company to hold their money lost billions of dollars. Why? Because they didn't actually own their crypto—the company did.
          </p>
          <p class="text-blue-100">
            This is the trust problem: <strong>When you rely on someone else, you're vulnerable.</strong>
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Big Question</h2>
        <p class="text-blue-100 mb-6">
          Is there a way to <strong>transfer value and information without trusting a middleman?</strong>
        </p>
        <p class="text-blue-100 mb-6">
          That's the problem Web3 tries to solve. And it all started with Bitcoin.
        </p>
      </div>
    `,
    quiz: {
      question: "What is the main 'trust problem' in Web2 and traditional systems?",
      options: [
        "People don't trust each other anymore",
        "You must rely on middlemen (banks, companies) who control your money and data",
        "The internet is too slow to build trust",
        "Trust problems only exist in developing countries"
      ],
      correctIndex: 1
    }
  },

  {
    id: 4,
    title: "The Digital Money Problem",
    module: "MODULE 2: The Problem Web2 Couldn't Solve",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 2: The Problem Web2 Couldn't Solve</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">The Digital Money Problem</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Before Bitcoin, there was a huge unsolved problem: <strong>How do you create digital money that can't be copied?</strong>
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Double-Spending Problem</h2>
        <p class="text-blue-100 mb-4">
          Here's the issue:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Digital files (photos, music, documents) can be copied infinitely</li>
          <li>If money is just a digital file, you could copy it and spend it twice</li>
          <li>Send $10 to Alice, keep a copy, send the same $10 to Bob</li>
        </ul>

        <p class="text-blue-100 mb-6">
          This is called <strong>double-spending</strong>, and it's why early digital money systems failed.
        </p>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3">Simple Example</h3>
          <p class="text-blue-100 mb-3">
            Imagine you have a photo on your phone. You can send it to 10 friends, and you still have the original. That's fine for photos.
          </p>
          <p class="text-blue-100">
            But if money worked the same way, you could send $100 to 10 different people and still have your $100. The money would be worthless.
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">How Traditional Systems "Solve" This</h2>
        <p class="text-blue-100 mb-4">
          Banks solve the double-spending problem by being the <strong>central authority</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>The bank keeps one master record of who has what</li>
          <li>When you send money, the bank updates its records</li>
          <li>You can't double-spend because the bank won't let you</li>
        </ul>

        <p class="text-blue-100 mb-6">
          But this requires <strong>trusting the bank</strong>. We're back to the trust problem.
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">The Challenge</h3>
          <p class="text-blue-100">
            For decades, nobody could figure out how to create digital money that:
          </p>
          <ul class="list-disc list-inside text-blue-100 space-y-2 mt-3">
            <li>Can't be copied (no double-spending)</li>
            <li>Doesn't need a central authority (no bank)</li>
            <li>Can be sent peer-to-peer (person to person)</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Then Came Bitcoin</h2>
        <p class="text-blue-100 mb-6">
          In 2008, someone using the name <strong>Satoshi Nakamoto</strong> published a paper describing Bitcoin. It solved the double-spending problem <strong>without needing a bank or central authority</strong>.
        </p>
        <p class="text-blue-100 mb-6">
          How? Through something called <strong>blockchain</strong>. We'll explain that next.
        </p>
      </div>
    `,
    quiz: {
      question: "What is the 'double-spending problem' in digital money?",
      options: [
        "Spending money twice at the same store",
        "Digital files can be copied, so you could send the same money to multiple people",
        "Banks charging double fees",
        "Having two bank accounts"
      ],
      correctIndex: 1
    }
  },

  // MODULE 3: Why Bitcoin Was Created
  {
    id: 5,
    title: "Bitcoin Explained Simply",
    module: "MODULE 3: Why Bitcoin Was Created",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 3: Why Bitcoin Was Created</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Bitcoin Explained Simply</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Bitcoin is <strong>digital money that works without banks</strong>. It was the first cryptocurrency, and it changed everything.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Problem Did Bitcoin Solve?</h2>
        <p class="text-blue-100 mb-6">
          Bitcoin solved the <strong>double-spending problem</strong> without needing a central authority. Here's how:
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">The Bitcoin Innovation</h3>
          <ul class="list-disc list-inside text-blue-100 space-y-2">
            <li><strong>Public ledger:</strong> Everyone can see all transactions (but not your identity)</li>
            <li><strong>Network verification:</strong> Thousands of computers verify each transaction</li>
            <li><strong>No single authority:</strong> No bank, no government, no company controls it</li>
            <li><strong>Permanent record:</strong> Once a transaction is confirmed, it can't be changed</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Shared Notebook Analogy</h2>
        <p class="text-blue-100 mb-4">
          Imagine you and 10 friends want to track who owes who money. Instead of trusting one person to keep the notebook:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Everyone gets a copy of the notebook</li>
          <li>When someone makes a payment, everyone writes it down</li>
          <li>You can't cheat because everyone else has the same record</li>
          <li>You don't need to trust any one person—you trust the system</li>
        </ul>

        <p class="text-blue-100 mb-6">
          That's basically how Bitcoin works. The "notebook" is the <strong>blockchain</strong>.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Bitcoin Matters</h2>
        <div class="space-y-4 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🌍 Borderless</h3>
            <p class="text-blue-100 text-sm">Send Bitcoin to anyone, anywhere, instantly. No bank approval needed.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🔓 Permissionless</h3>
            <p class="text-blue-100 text-sm">No one can stop you from using Bitcoin. No account to freeze, no credit check.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🔒 Secure</h3>
            <p class="text-blue-100 text-sm">The network is secured by thousands of computers worldwide. Extremely hard to hack.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">💎 Scarce</h3>
            <p class="text-blue-100 text-sm">Only 21 million Bitcoin will ever exist. No government can print more.</p>
          </div>
        </div>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">Important Note</h3>
          <p class="text-blue-100">
            Bitcoin is <strong>just digital money</strong>. That's it. It doesn't do smart contracts or run apps (that's what Ethereum is for, which we'll cover later). Bitcoin does one thing really well: being money without a bank.
          </p>
        </div>

        <p class="text-blue-100 mb-6 text-lg">
          Bitcoin proved that <strong>trustless digital money is possible</strong>. This breakthrough opened the door to everything else in Web3.
        </p>
      </div>
    `,
    quiz: {
      question: "What problem did Bitcoin solve?",
      options: [
        "Making the internet faster",
        "Double-spending (creating digital money without needing a bank)",
        "Social media privacy",
        "Video streaming quality"
      ],
      correctIndex: 1
    }
  },

  // MODULE 4: What is Blockchain?
  {
    id: 6,
    title: "Blockchain Basics",
    module: "MODULE 4: What is Blockchain?",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 4: What is Blockchain?</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Blockchain Basics</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Blockchain is the <strong>technology that makes Bitcoin (and all Web3) work</strong>. Let's break it down in the simplest way possible.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Is a Blockchain?</h2>
        <p class="text-blue-100 mb-6">
          A blockchain is exactly what it sounds like: a <strong>chain of blocks</strong>.
        </p>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <p class="text-blue-100 mb-3">
            <strong>Block:</strong> A container of transactions (like "Alice sent Bob 1 Bitcoin")
          </p>
          <p class="text-blue-100">
            <strong>Chain:</strong> Blocks are linked together in order, forming a permanent history
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Permanent Ink Analogy</h2>
        <p class="text-blue-100 mb-4">
          Think of blockchain like <strong>writing in a public book with permanent ink</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Each page = a block</li>
          <li>You write transactions on the page</li>
          <li>Once a page is full, you glue it to the previous page</li>
          <li>Everyone has a copy of the book</li>
          <li>You can't rip out pages or erase entries</li>
        </ul>

        <p class="text-blue-100 mb-6">
          That's blockchain. A <strong>permanent, public record</strong> that everyone can see but no one can change.
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Why Blockchain Matters</h3>
          <div class="space-y-4">
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🔍 Transparency</p>
              <p class="text-blue-100 text-sm">Anyone can view all transactions. Nothing is hidden.</p>
            </div>
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🔐 Security</p>
              <p class="text-blue-100 text-sm">Changing old records is nearly impossible. The network protects itself.</p>
            </div>
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🪨 Immutability</p>
              <p class="text-blue-100 text-sm">Once written, data can't be erased or altered. History is permanent.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">How Does It Actually Work?</h2>
        <ol class="list-decimal list-inside text-blue-100 space-y-3 mb-6">
          <li>You make a transaction (send Bitcoin to someone)</li>
          <li>The transaction is broadcast to the network</li>
          <li>Thousands of computers verify it's valid</li>
          <li>The transaction is added to a new block</li>
          <li>That block is added to the chain</li>
          <li>Everyone's copy of the blockchain updates</li>
        </ol>

        <p class="text-blue-100 mb-6">
          No bank. No middleman. Just <strong>math and code</strong>.
        </p>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3">Key Takeaway</h3>
          <p class="text-blue-100">
            Blockchain is a <strong>shared database</strong> that:
          </p>
          <ul class="list-disc list-inside text-blue-100 space-y-2 mt-3">
            <li>Everyone can read</li>
            <li>No one can secretly change</li>
            <li>Doesn't need a company to run it</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: "What is a blockchain?",
      options: [
        "A type of cryptocurrency",
        "A chain of blocks containing transactions that can't be changed",
        "A social media platform",
        "A way to mine Bitcoin faster"
      ],
      correctIndex: 1
    }
  },

  // MODULE 5: Why Ethereum Exists
  {
    id: 7,
    title: "Bitcoin vs Ethereum",
    module: "MODULE 5: Why Ethereum Exists",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 5: Why Ethereum Exists</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Bitcoin vs Ethereum</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Bitcoin proved blockchain works. But some people asked: <strong>"What if we could do more than just send money?"</strong>
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Bitcoin: Digital Gold</h2>
        <p class="text-blue-100 mb-4">
          Bitcoin is great at being <strong>money</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Store of value (like digital gold)</li>
          <li>Send and receive payments</li>
          <li>That's pretty much it</li>
        </ul>

        <p class="text-blue-100 mb-6">
          Bitcoin is <strong>simple by design</strong>. It does one thing really well and doesn't try to do more.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Ethereum: Programmable Money</h2>
        <p class="text-blue-100 mb-4">
          In 2015, a platform called <strong>Ethereum</strong> launched with a bigger vision:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Not just money, but <strong>programmable money</strong></li>
          <li>You can build apps on it</li>
          <li>It can run code automatically (smart contracts)</li>
          <li>It's like a <strong>world computer</strong> that no one owns</li>
        </ul>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Simple Comparison</h3>
          <div class="space-y-4">
            <div class="bg-white/5 rounded p-4">
              <p class="font-semibold text-cyan-200 mb-2">💰 Bitcoin</p>
              <p class="text-blue-100 text-sm">
                Like a <strong>calculator</strong>. Does one thing (math/money) perfectly. Simple and secure.
              </p>
            </div>
            <div class="bg-white/5 rounded p-4">
              <p class="font-semibold text-cyan-200 mb-2">⚡ Ethereum</p>
              <p class="text-blue-100 text-sm">
                Like a <strong>smartphone</strong>. Does money + runs apps. More complex, more possibilities.
              </p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Can You Build on Ethereum?</h2>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li><strong>DeFi apps:</strong> Lending, borrowing, trading (no bank)</li>
          <li><strong>NFTs:</strong> Digital art, collectibles, tickets</li>
          <li><strong>DAOs:</strong> Organizations run by code and votes</li>
          <li><strong>Games:</strong> Where you truly own your in-game items</li>
          <li><strong>Social platforms:</strong> Where you own your content</li>
        </ul>

        <p class="text-blue-100 mb-6">
          Ethereum made all of this possible through something called <strong>smart contracts</strong>.
        </p>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3">Which Is Better?</h3>
          <p class="text-blue-100 mb-3">
            Neither. They serve different purposes:
          </p>
          <p class="text-blue-100 text-sm">
            <strong>Bitcoin</strong> = Best for storing value and simple payments<br/>
            <strong>Ethereum</strong> = Best for building decentralized apps
          </p>
        </div>

        <p class="text-blue-100 mb-6">
          Both use blockchain. Both are decentralized. But Ethereum opened the door to <strong>Web3 applications</strong>.
        </p>
      </div>
    `,
    quiz: {
      question: "What is the main difference between Bitcoin and Ethereum?",
      options: [
        "Bitcoin is faster than Ethereum",
        "Bitcoin is digital money; Ethereum is programmable money that can run apps",
        "Ethereum is older than Bitcoin",
        "Bitcoin uses blockchain but Ethereum doesn't"
      ],
      correctIndex: 1
    }
  },

  {
    id: 8,
    title: "Smart Contracts",
    module: "MODULE 5: Why Ethereum Exists",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 5: Why Ethereum Exists</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Smart Contracts</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Smart contracts are <strong>self-executing agreements written in code</strong>. They're the backbone of everything in Web3.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Vending Machine Analogy</h2>
        <p class="text-blue-100 mb-4">
          A smart contract is like a <strong>vending machine</strong>:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>You put money in ($2)</li>
          <li>You press a button (select snack)</li>
          <li>The machine automatically gives you the snack</li>
          <li>No cashier needed. No trust required. Just rules.</li>
        </ul>

        <p class="text-blue-100 mb-6">
          Smart contracts work the same way: <strong>IF this happens, THEN do that</strong>. Automatically.
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Real-World Example: Crowdfunding</h3>
          <p class="text-blue-100 mb-4">
            Imagine you want to raise $10,000 for a project. Here's how a smart contract handles it:
          </p>
          <div class="bg-white/10 rounded p-4 mb-3">
            <p class="text-sm font-mono text-cyan-200">
              IF total raised ≥ $10,000 by deadline<br/>
              THEN send all money to project creator<br/>
              ELSE refund everyone automatically
            </p>
          </div>
          <p class="text-blue-100 text-sm">
            No Kickstarter. No middleman. No "oops, we spent your money." The code does exactly what it says.
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Smart Contracts Matter</h2>
        <div class="space-y-4 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🤖 Automatic</h3>
            <p class="text-blue-100 text-sm">They execute themselves when conditions are met. No human intervention needed.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🔓 Trustless</h3>
            <p class="text-blue-100 text-sm">You don't need to trust the other person. You trust the code (which everyone can verify).</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🌐 Transparent</h3>
            <p class="text-blue-100 text-sm">Anyone can read the code and see exactly what it does. No hidden terms.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🪨 Unchangeable</h3>
            <p class="text-blue-100 text-sm">Once deployed, the contract can't be altered. The rules are permanent.</p>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Can Smart Contracts Do?</h2>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>Handle money transfers automatically (DeFi)</li>
          <li>Create and sell NFTs</li>
          <li>Run decentralized organizations (DAOs)</li>
          <li>Manage insurance policies</li>
          <li>Track supply chains</li>
          <li>Execute legal agreements</li>
        </ul>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">⚠️ The Catch</h3>
          <p class="text-blue-100 mb-3">
            Because smart contracts are <strong>unchangeable</strong>, bugs can be catastrophic. If there's a mistake in the code, hackers can exploit it and steal money.
          </p>
          <p class="text-blue-100 text-sm">
            That's why reputable projects get their smart contracts <strong>audited</strong> (checked by security experts) before launching.
          </p>
        </div>

        <p class="text-blue-100 mb-6 text-lg">
          Smart contracts are the <strong>building blocks of Web3</strong>. Everything else (DeFi, NFTs, DAOs) is built on top of them.
        </p>
      </div>
    `,
    quiz: {
      question: "What is the main benefit of a smart contract?",
      options: [
        "It's written in plain English instead of code",
        "It executes automatically without needing middlemen or trust",
        "It can be changed anytime if there's a problem",
        "It's only used for trading Bitcoin"
      ],
      correctIndex: 1
    }
  },

  // MODULE 6: What is Web3?
  {
    id: 9,
    title: "Web3 Explained",
    module: "MODULE 6: What is Web3?",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 6: What is Web3?</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Web3 Explained</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Now that you understand Bitcoin, blockchain, and smart contracts, let's tie it all together: <strong>What is Web3?</strong>
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Evolution</h2>
        <div class="space-y-4 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">📖 Web1 = Read</h3>
            <p class="text-blue-100 text-sm">Static websites. You could only consume content.</p>
          </div>
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">✍️ Web2 = Read + Write</h3>
            <p class="text-blue-100 text-sm">Social media. You create content, but companies own the platforms.</p>
          </div>
          <div class="bg-cyan-900/30 border border-cyan-400/50 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🔑 Web3 = Read + Write + Own</h3>
            <p class="text-blue-100 text-sm"><strong>You own your data, content, and digital assets. No company controls it.</strong></p>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Makes Web3 Different?</h2>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-4 text-cyan-300">Key Web3 Principles</h3>
          <div class="space-y-4">
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🏆 Ownership</p>
              <p class="text-blue-100 text-sm">
                In Web2, Instagram owns your photos. In Web3, <strong>you own your digital assets</strong> (NFTs, tokens, data). They're yours, stored in your wallet.
              </p>
            </div>
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🌐 Decentralization</p>
              <p class="text-blue-100 text-sm">
                No single company controls the platform. It's run by a network of computers worldwide.
              </p>
            </div>
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🔓 Permissionless</p>
              <p class="text-blue-100 text-sm">
                Anyone can build, use, or participate. No gatekeepers. No "your account has been suspended."
              </p>
            </div>
            <div>
              <p class="font-semibold text-cyan-200 mb-1">🔍 Transparency</p>
              <p class="text-blue-100 text-sm">
                All transactions and code are public. You can verify everything yourself.
              </p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Web2 vs Web3 Example</h2>
        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <p class="font-semibold text-cyan-300 mb-3">🎮 Gaming</p>
          <p class="text-blue-100 mb-3 text-sm">
            <strong>Web2:</strong> You buy a sword in Fortnite for $20. Epic Games owns it. If they shut down the game or ban you, your sword is gone. You can't sell it.
          </p>
          <p class="text-blue-100 text-sm">
            <strong>Web3:</strong> You buy a sword as an NFT. It's yours. You can use it across different games (if they support it), sell it to someone else, or keep it forever. The game company can't take it away.
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Your Wallet = Your Account</h2>
        <p class="text-blue-100 mb-4">
          In Web3, your <strong>wallet</strong> (like MetaMask) is your identity:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li>It holds your crypto and NFTs</li>
          <li>It's how you log into Web3 apps (no email/password)</li>
          <li>You control it with a private key (like a master password)</li>
          <li>No company can freeze or delete it</li>
        </ul>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">Important</h3>
          <p class="text-blue-100">
            <strong>"Not your keys, not your crypto"</strong> — If you don't control the private key, you don't truly own it. This is why keeping your keys safe is critical.
          </p>
        </div>

        <p class="text-blue-100 mb-6 text-lg">
          Web3 is about <strong>shifting power from companies to users</strong>. You become an owner, not just a user.
        </p>
      </div>
    `,
    quiz: {
      question: "What is the main difference between Web2 and Web3?",
      options: [
        "Web3 is faster than Web2",
        "In Web3, users own their data and assets instead of companies",
        "Web3 only works on mobile phones",
        "Web3 has better graphics"
      ],
      correctIndex: 1
    }
  },

  // MODULE 7: Wallets & Ownership
  {
    id: 10,
    title: "What is a Wallet?",
    module: "MODULE 7: Wallets & Ownership",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 7: Wallets & Ownership</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">What is a Wallet?</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          In Web3, a <strong>wallet</strong> is your gateway to everything. But it's not like a physical wallet—it's more like a <strong>key to your digital safe</strong>.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What Does a Wallet Actually Do?</h2>
        <p class="text-blue-100 mb-4">
          A crypto wallet:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li><strong>Stores your keys</strong> (not the actual crypto)</li>
          <li>Lets you send and receive crypto and NFTs</li>
          <li>Connects you to Web3 apps (like DeFi, NFT marketplaces)</li>
          <li>Acts as your <strong>Web3 identity</strong> (no email/password needed)</li>
        </ul>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3">Important Concept</h3>
          <p class="text-blue-100 mb-3">
            Your wallet <strong>doesn't actually hold crypto</strong>. Your crypto lives on the blockchain (the public ledger).
          </p>
          <p class="text-blue-100 text-sm">
            Your wallet holds the <strong>private key</strong> that proves you own that crypto. Think of it like a password that gives you access.
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Mailbox Analogy</h2>
        <p class="text-blue-100 mb-4">
          Your wallet is like a mailbox:
        </p>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li><strong>Public address:</strong> Your mailbox address (everyone can see it and send you mail)</li>
          <li><strong>Private key:</strong> Your mailbox key (only you can open it and take things out)</li>
        </ul>

        <p class="text-blue-100 mb-6">
          You can share your public address freely so people can send you crypto. But <strong>NEVER share your private key</strong>—that's like giving someone your house key.
        </p>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">Popular Wallets</h3>
          <ul class="list-disc list-inside text-blue-100 space-y-2">
            <li><strong>MetaMask:</strong> Browser extension, beginner-friendly</li>
            <li><strong>Coinbase Wallet:</strong> Mobile-first, easy to use</li>
            <li><strong>Rainbow:</strong> Beautiful design, great for NFTs</li>
            <li><strong>Ledger/Trezor:</strong> Hardware wallets (most secure)</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Most Important Rule</h2>
        <div class="bg-red-900/30 border border-red-500/50 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-red-300">🔐 "Not Your Keys, Not Your Crypto"</h3>
          <p class="text-blue-100 mb-3">
            If you don't control the private key, you don't truly own your crypto.
          </p>
          <p class="text-blue-100 text-sm mb-3">
            <strong>Example:</strong> When you keep crypto on an exchange like Coinbase or Binance, <em>they</em> hold the private keys. You're trusting them not to lose or freeze your funds.
          </p>
          <p class="text-blue-100 text-sm">
            With your own wallet, <strong>you're in full control</strong>. But that means you're also responsible for keeping it safe.
          </p>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">How to Keep Your Wallet Safe</h2>
        <ul class="list-disc list-inside text-blue-100 space-y-2 mb-6">
          <li><strong>Write down your seed phrase</strong> (12-24 words) and store it offline</li>
          <li>Never share your seed phrase or private key with anyone</li>
          <li>Be careful of phishing scams (fake websites, DMs asking for keys)</li>
          <li>Use a hardware wallet for large amounts</li>
          <li>Double-check addresses before sending</li>
        </ul>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">⚠️ No "Forgot Password" Button</h3>
          <p class="text-blue-100">
            If you lose your private key or seed phrase, your crypto is <strong>gone forever</strong>. No customer support can help you. This is the tradeoff for full ownership.
          </p>
        </div>

        <p class="text-blue-100 mb-6 text-lg">
          Your wallet is your <strong>passport to Web3</strong>. Keep it safe, and you're in control.
        </p>
      </div>
    `,
    quiz: {
      question: "What does the phrase 'Not your keys, not your crypto' mean?",
      options: [
        "You need a physical key to use crypto",
        "If you don't control the private key, you don't truly own the crypto",
        "Keys are a type of cryptocurrency",
        "Only rich people can own crypto"
      ],
      correctIndex: 1
    }
  },

  // MODULE 8: Careers & Paths in Web3
  {
    id: 11,
    title: "Web3 Career Paths",
    module: "MODULE 8: Careers & Paths in Web3",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 8: Careers & Paths in Web3</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Web3 Career Paths</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          Web3 isn't just for coders. There are <strong>tons of career paths</strong>, and many don't require technical skills.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Technical Paths</h2>
        <div class="space-y-4 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">👨‍💻 Smart Contract Developer</h3>
            <p class="text-blue-100 text-sm mb-2">Write smart contracts in Solidity. Build DeFi protocols, NFT projects, DAOs.</p>
            <p class="text-xs text-blue-200">Skills: Solidity, JavaScript, blockchain fundamentals</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🌐 dApp Developer</h3>
            <p class="text-blue-100 text-sm mb-2">Build the frontend (user interface) for Web3 apps. Connect apps to wallets and smart contracts.</p>
            <p class="text-xs text-blue-200">Skills: React, Web3.js/Ethers.js, JavaScript</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🔐 Security Auditor</h3>
            <p class="text-blue-100 text-sm mb-2">Review smart contracts for bugs and vulnerabilities. Highly in-demand and well-paid.</p>
            <p class="text-xs text-blue-200">Skills: Solidity, security best practices, testing</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">⚙️ Protocol Engineer</h3>
            <p class="text-blue-100 text-sm mb-2">Work on blockchain infrastructure (Layer 1s, Layer 2s, consensus mechanisms).</p>
            <p class="text-xs text-blue-200">Skills: Rust, Go, cryptography, distributed systems</p>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Non-Technical Paths</h2>
        <div class="space-y-4 mb-8">
          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🎨 Community Manager</h3>
            <p class="text-blue-100 text-sm mb-2">Build and manage Discord/Twitter communities. Engage users, answer questions, grow the project.</p>
            <p class="text-xs text-blue-200">Skills: Communication, Discord/Twitter, empathy</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">✍️ Content Creator / Educator</h3>
            <p class="text-blue-100 text-sm mb-2">Write threads, make videos, explain Web3 concepts. Help onboard new users.</p>
            <p class="text-xs text-blue-200">Skills: Writing, video editing, simplifying complex ideas</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🎨 NFT Artist / Designer</h3>
            <p class="text-blue-100 text-sm mb-2">Create digital art and sell it as NFTs. Design for Web3 brands and projects.</p>
            <p class="text-xs text-blue-200">Skills: Graphic design, illustration, 3D modeling</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">📊 Analyst / Researcher</h3>
            <p class="text-blue-100 text-sm mb-2">Analyze on-chain data, track trends, write research reports for investors or protocols.</p>
            <p class="text-xs text-blue-200">Skills: Data analysis, Excel/SQL, writing</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">🏛️ DAO Contributor</h3>
            <p class="text-blue-100 text-sm mb-2">Work for a DAO doing ops, governance, partnerships, treasury management.</p>
            <p class="text-xs text-blue-200">Skills: Project management, coordination, governance</p>
          </div>

          <div class="bg-white/5 border border-white/20 rounded-lg p-5">
            <h3 class="font-semibold text-cyan-300 mb-2">💼 Product Manager</h3>
            <p class="text-blue-100 text-sm mb-2">Define features, coordinate teams, understand user needs for Web3 products.</p>
            <p class="text-xs text-blue-200">Skills: Product thinking, coordination, Web3 literacy</p>
          </div>
        </div>

        <div class="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-cyan-300">💡 The Best Part</h3>
          <p class="text-blue-100">
            Web3 is <strong>permissionless</strong>. You don't need a degree or years of experience. You just need to:
          </p>
          <ul class="list-disc list-inside text-blue-100 space-y-2 mt-3 text-sm">
            <li>Learn in public (share what you're learning)</li>
            <li>Contribute to open-source projects</li>
            <li>Join communities and be helpful</li>
            <li>Ship side projects (build, create, experiment)</li>
          </ul>
        </div>

        <p class="text-blue-100 mb-6">
          Web3 rewards <strong>builders and doers</strong>. Start somewhere, stay curious, and your path will reveal itself.
        </p>
      </div>
    `,
    quiz: {
      question: "Do you need to be a developer to work in Web3?",
      options: [
        "Yes, only developers can work in Web3",
        "No, there are many non-technical roles like community, content, design, and research",
        "Yes, you must know Solidity",
        "Only if you want to make money"
      ],
      correctIndex: 1
    }
  },

  {
    id: 12,
    title: "Choosing Your Path",
    module: "MODULE 8: Careers & Paths in Web3",
    content: `
      <div class="mb-4 text-sm text-cyan-300 font-semibold">MODULE 8: Careers & Paths in Web3</div>
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Choosing Your Path</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-blue-100 mb-6">
          You've learned the fundamentals. Now it's time to <strong>choose your path</strong> and take action.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Technical or Non-Technical?</h2>
        
        <div class="space-y-4 mb-8">
          <div class="bg-cyan-900/30 border border-cyan-400/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-cyan-300">👨‍💻 If You Want to Build (Technical)</h3>
            <p class="text-blue-100 mb-4 text-sm">Start here:</p>
            <ol class="list-decimal list-inside text-blue-100 space-y-2 text-sm">
              <li>Learn JavaScript basics (free: freeCodeCamp, Codecademy)</li>
              <li>Understand how blockchain works (you just did!)</li>
              <li>Learn Solidity (CryptoZombies, Solidity docs)</li>
              <li>Build a simple smart contract (mint an NFT, create a token)</li>
              <li>Join hackathons (ETHGlobal, Devfolio)</li>
              <li>Contribute to open-source Web3 projects</li>
            </ol>
          </div>

          <div class="bg-blue-900/30 border border-blue-400/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-blue-300">🎨 If You Don't Want to Code (Non-Technical)</h3>
            <p class="text-blue-100 mb-4 text-sm">Start here:</p>
            <ol class="list-decimal list-inside text-blue-100 space-y-2 text-sm">
              <li>Set up a wallet (MetaMask, Rainbow)</li>
              <li>Join Web3 communities (Discord servers, Twitter)</li>
              <li>Start creating content (explain what you're learning)</li>
              <li>Help in a DAO or Web3 project (many need non-tech help)</li>
              <li>Build your Web3 network (go to events, engage online)</li>
              <li>Specialize (community, content, design, research, etc.)</li>
            </ol>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">The Best Way to Learn</h2>
        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8">
          <p class="text-blue-100 mb-4 font-semibold">
            🚀 Learn by Doing
          </p>
          <ul class="list-disc list-inside text-blue-100 space-y-2 text-sm">
            <li><strong>Use Web3 apps:</strong> Try Uniswap (swap tokens), OpenSea (browse NFTs), Lens (Web3 social)</li>
            <li><strong>Join a DAO:</strong> Find one that interests you and start contributing</li>
            <li><strong>Build in public:</strong> Share your progress on Twitter/X</li>
            <li><strong>Make mistakes:</strong> Test things on testnets (fake money) before using real crypto</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Resources to Keep Learning</h2>
        <div class="space-y-3 mb-8">
          <div class="bg-white/5 rounded p-4">
            <p class="font-semibold text-cyan-300 mb-1">📚 Learning Platforms</p>
            <p class="text-blue-100 text-sm">CryptoZombies, Buildspace, LearnWeb3, Odyssey DAO, RabbitHole</p>
          </div>
          <div class="bg-white/5 rounded p-4">
            <p class="font-semibold text-cyan-300 mb-1">🐦 Twitter/X Follows</p>
            <p class="text-blue-100 text-sm">Follow builders, educators, and thought leaders (not price speculators)</p>
          </div>
          <div class="bg-white/5 rounded p-4">
            <p class="font-semibold text-cyan-300 mb-1">💬 Communities</p>
            <p class="text-blue-100 text-sm">Join Discord servers of projects you like. Ask questions, help others.</p>
          </div>
          <div class="bg-white/5 rounded p-4">
            <p class="font-semibold text-cyan-300 mb-1">🎤 Podcasts</p>
            <p class="text-blue-100 text-sm">Bankless, Unchained, The Defiant, On The Brink</p>
          </div>
        </div>

        <div class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-3 text-yellow-300">⚠️ Stay Safe</h3>
          <ul class="list-disc list-inside text-blue-100 space-y-2 text-sm">
            <li>Never share your seed phrase or private key</li>
            <li>Be skeptical of "guaranteed returns" and "get rich quick" schemes</li>
            <li>Start with small amounts while learning</li>
            <li>Use testnets to experiment without risking real money</li>
            <li>Double-check URLs and contracts (scams are common)</li>
          </ul>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Your Next Steps</h2>
        <ol class="list-decimal list-inside text-blue-100 space-y-3 mb-8">
          <li><strong>Set up a wallet</strong> (MetaMask is beginner-friendly)</li>
          <li><strong>Pick ONE area to focus on</strong> (DeFi, NFTs, DAOs, development, community, etc.)</li>
          <li><strong>Join 2-3 communities</strong> in that area</li>
          <li><strong>Learn by doing</strong> (use apps, contribute, build)</li>
          <li><strong>Be patient</strong> — Web3 is complex, and that's okay</li>
        </ol>

        <div class="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 rounded-lg p-8 my-8 text-center">
          <h3 class="text-3xl font-bold mb-4 text-cyan-300">🎓 You Are No Longer a Beginner</h3>
          <p class="text-blue-100 mb-4">
            You understand Web1, Web2, Web3. You know what blockchain is, why Bitcoin matters, how Ethereum works, and what smart contracts do.
          </p>
          <p class="text-blue-100 mb-4">
            You know about wallets, ownership, and career paths. You're ahead of <strong>95% of people</strong>.
          </p>
          <p class="text-blue-100 text-lg font-semibold">
            Welcome to Web3. 🚀
          </p>
        </div>

        <div class="bg-white/5 border border-white/20 rounded-lg p-6 my-8 text-center">
          <p class="text-blue-100 text-sm mb-3">
            The best time to start was yesterday. The second best time is now.
          </p>
          <p class="text-cyan-300 font-semibold">
            Pick one thing from this course and do it today.
          </p>
        </div>
      </div>
    `,
    quiz: {
      question: "What's the best way to learn Web3?",
      options: [
        "Just read about it and never try anything",
        "Learn by doing: use apps, join communities, build projects",
        "Wait until you know everything before starting",
        "Only follow crypto prices"
      ],
      correctIndex: 1
    }
  }
];