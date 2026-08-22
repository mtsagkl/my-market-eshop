import React, { useState, useEffect } from 'react';
import './App.css';
import { FaCreditCard, FaApplePay, FaGooglePay } from 'react-icons/fa';

// Αρχικά προϊόντα (Seed Data)
const initialProducts = [
  {
    id: "1",
    title: "Πορτοκάλια 1kg",
    description: "Φρέσκα πορτοκάλια, ιδανικά για χυμό ή κατανάλωση.",
    category: "Φρέσκα τρόφιμα",
    subcategory: "Φρούτα",
    rating: 0,
    votesCount: 0,
    price: 1.2,
    discount: 20,
    stock: 200,
    image: "images/oranges.jpg"
  },
  {
    id: "2",
    title: "Καρότα 1kg",
    description: "Τραγανά καρότα, κατάλληλα για σαλάτες και μαγείρεμα.",
    category: "Φρέσκα τρόφιμα",
    subcategory: "Λαχανικά",
    rating: 0.0,
    votesCount: 0,
    price: 1.0,
    discount: 0,
    stock: 150,
    image: "images/karota.jpg"
  },
  {
    id: "3",
    title: "Φιλέτο Σολομού 300g",
    description: "Φρέσκος σολομός φιλέτο έτοιμος για μαγείρεμα.",
    category: "Φρέσκα τρόφιμα",
    subcategory: "Ψάρια",
    rating: 0.0,
    votesCount: 0,
    price: 12.0,
    discount: 15,
    stock: 50,
    image: "images/fileto_solomo.jpg"
  },
  {
    id: "4",
    title: "Κιμάς Μοσχαρίσιος 500g",
    description: "Φρέσκος κιμάς μοσχαρίσιος από τοπικό κρεοπωλείο.",
    category: "Φρέσκα τρόφιμα",
    subcategory: "Κρέατα",
    rating: 0.0,
    votesCount: 0,
    price: 6.5,
    discount: 0,
    stock: 100,
    image: "images/kimas_mosxarisios.jpg"
  },
  {
    id: "5",
    title: "Κατεψυγμένες Πίτσες Margherita 400g",
    description: "Πίτσα Margherita με φρέσκια σάλτσα ντομάτας και τυρί.",
    category: "Κατεψυγμένα τρόφιμα",
    subcategory: "Κατεψυγμένες πίτσες",
    rating: 0.0,
    votesCount: 0,
    price: 4.0,
    discount: 10,
    stock: 80,
    image: "images/pitsa_margarita.jpg"
  },
  {
    id: "6",
    title: "Κατεψυγμένα Γεύματα Σπαγγέτι Μπολονέζ 450g",
    description: "Έτοιμο κατεψυγμένο γεύμα σπαγγέτι μπολονέζ.",
    category: "Κατεψυγμένα τρόφιμα",
    subcategory: "Κατεψυγμένα γεύματα",
    rating: 0.0,
    votesCount: 0,
    price: 3.8,
    discount: 0,
    stock: 60,
    image: "images/spaggeti_bolonez.jpg"
  },
  {
    id: "7",
    title: "Γιαούρτι Στραγγιστό 2% Λιπαρά 200g",
    description: "Ελαφρύ στραγγιστό γιαούρτι με χαμηλά λιπαρά.",
    category: "Προϊόντα ψυγείου",
    subcategory: "Γιαούρτια",
    rating: 0.0,
    votesCount: 0,
    price: 1.8,
    discount: 0,
    stock: 200,
    image: "images/giaourti_2.jpg"
  },
  {
    id: "8",
    title: "Γάλα Πλήρες 1lt",
    description: "Πλήρες γάλα με πλούσια γεύση και θρεπτικά συστατικά.",
    category: "Προϊόντα ψυγείου",
    subcategory: "Γάλα",
    rating: 0.0,
    votesCount: 0,
    price: 1.3,
    discount: 15,
    stock: 250,
    image: "images/gala_plhres.jpg"
  },
  {
    id: "9",
    title: "Βούτυρο Αγελαδινό 250g",
    description: "Βούτυρο από αγελαδινό γάλα για μαγείρεμα και γλυκά.",
    category: "Προϊόντα ψυγείου",
    subcategory: "Βούτυρο",
    rating: 0.0,
    votesCount: 0,
    price: 2.5,
    discount: 0,
    stock: 100,
    image: "images/bouturo.jpg"
  },
  {
    id: "10",
    title: "Σαλάμι Αέρος 200g",
    description: "Αυθεντικό σαλάμι αέρος με έντονη γεύση.",
    category: "Αλλαντικά",
    subcategory: "Σαλάμι",
    rating: 0.0,
    votesCount: 0,
    price: 3.5,
    discount: 0,
    stock: 70,
    image: "images/salami.jpg"
  },
  {
    id: "11",
    title: "Μπέικον Καπνιστό 200g",
    description: "Καπνιστό μπέικον για μαγείρεμα ή σάντουιτς.",
    category: "Αλλαντικά",
    subcategory: "Μπέικον",
    rating: 0.0,
    votesCount: 0,
    price: 3.2,
    discount: 0,
    stock: 90,
    image: "images/mpeikon.jpg"
  },
  {
    id: "12",
    title: "Κρασί Ερυθρό Ξηρό 750ml",
    description: "Ερυθρό ξηρό κρασί από ελληνικά σταφύλια.",
    category: "Αλκοολούχα ποτά",
    subcategory: "Κρασί",
    rating: 0.0,
    votesCount: 0,
    price: 7.0,
    discount: 20,
    stock: 120,
    image: "images/krasi_erithro.jpeg"
  },
  {
    id: "13",
    title: "Ούζο Πλωμαρίου 200ml",
    description: "Παραδοσιακό ούζο από τη Λέσβο με γλυκάνισο.",
    category: "Αλκοολούχα ποτά",
    subcategory: "Ούζο",
    rating: 0.0,
    votesCount: 0,
    price: 5.0,
    discount: 0,
    stock: 150,
    image: "images/ouzo.jpg"
  },
  {
    id: "14",
    title: "Τσίπουρο Χωρίς Γλυκάνισο 200ml",
    description: "Αυθεντικό τσίπουρο χωρίς γλυκάνισο.",
    category: "Αλκοολούχα ποτά",
    subcategory: "Τσίπουρο",
    rating: 0.0,
    votesCount: 0,
    price: 6.5,
    discount: 25,
    stock: 100,
    image: "images/tsipouro.jpg"
  },
  {
    id: "15",
    title: "Αναψυκτικό Coca Cola 1,5lt",
    description: "Κλασικό αναψυκτικό Coca Cola με ζάχαρη.",
    category: "Μη αλκοολούχα ποτά",
    subcategory: "Αναψυκτικά",
    rating: 0.0,
    votesCount: 0,
    price: 1.3,
    discount: 0,
    stock: 300,
    image: "images/coca_cola.png"
  },
  {
    id: "16",
    title: "Νερό Μεταλλικό 1,5lt",
    description: "Φυσικό μεταλλικό νερό από ελληνικές πηγές.",
    category: "Μη αλκοολούχα ποτά",
    subcategory: "Νερό",
    rating: 0.0,
    votesCount: 0,
    price: 0.5,
    discount: 10,
    stock: 500,
    image: "images/nero.jpg"
  },
  {
    id: "17",
    title: "Ενεργειακό Ποτό Red Bull 250ml",
    description: "Ενεργειακό ποτό με καφεΐνη για άμεση ενέργεια.",
    category: "Μη αλκοολούχα ποτά",
    subcategory: "Ενεργειακά ποτά",
    rating: 0.0,
    votesCount: 0,
    price: 1.8,
    discount: 0,
    stock: 200,
    image: "images/red_bull.jpg"
  },
  {
    id: "18",
    title: "Καθαριστικό Τζαμιών 750ml",
    description: "Αποτελεσματικό καθαριστικό για τζάμια και καθρέπτες.",
    category: "Καθαριστικά για το σπίτι",
    subcategory: "Καθαριστικά για τα τζάμια",
    rating: 0.0,
    votesCount: 0,
    price: 2.5,
    discount: 0,
    stock: 180,
    image: "images/katharistiko_tzamia.jpg"
  },
  {
    id: "19",
    title: "Καθαριστικό Κουζίνας 500ml",
    description: "Ισχυρό καθαριστικό για επιφάνειες κουζίνας.",
    category: "Καθαριστικά για το σπίτι",
    subcategory: "Καθαριστικά κουζίνας",
    rating: 0.0,
    votesCount: 0,
    price: 3.0,
    discount: 0,
    stock: 150,
    image: "images/katharistiko_kouzina.jpg"
  },
  {
    id: "20",
    title: "Υγρό Πλυντηρίου Ρούχων 3lt",
    description: "Υγρό πλυντηρίου για έντονα λεκέδες και καθημερινά ρούχα.",
    category: "Απορρυπαντικά ρούχων",
    subcategory: "Υγρά πλυντηρίου",
    rating: 0.0,
    votesCount: 0,
    price: 6.0,
    discount: 0,
    stock: 120,
    image: "images/ygro_plynthriou.jpg"
  },
  {
    id: "21",
    title: "Μαλακτικό Ρούχων 2lt",
    description: "Μαλακτικό για ρούχα με φρέσκο άρωμα λουλουδιών.",
    category: "Απορρυπαντικά ρούχων",
    subcategory: "Μαλακτικά",
    rating: 0.0,
    votesCount: 0,
    price: 3.8,
    discount: 20,
    stock: 100,
    image: "images/malaktiko.jpg"
  },
  {
    id: "22",
    title: "Μακιγιάζ Ρουζ 4g",
    description: "Ρουζ για φυσική λάμψη στα μάγουλα.",
    category: "Καλλυντικά",
    subcategory: "Μακιγιάζ",
    rating: 0.0,
    votesCount: 0,
    price: 10.0,
    discount: 0,
    stock: 60,
    image: "images/rouz.jpg"
  },
  {
    id: "23",
    title: "Λοσιόν Σώματος Ενυδατική 200ml",
    description: "Ενυδατική λοσιόν σώματος με βιταμίνες και θρεπτικά συστατικά.",
    category: "Καλλυντικά",
    subcategory: "Λοσιόν σώματος",
    rating: 0.0,
    votesCount: 0,
    price: 8.0,
    discount: 0,
    stock: 80,
    image: "images/losion.jpg"
  },
  {
    id: "24",
    title: "Οδοντόβουρτσα Oral-B Medium",
    description: "Οδοντόβουρτσα μέτριας σκληρότητας για καθημερινή χρήση.",
    category: "Προϊόντα στοματικής υγιεινής",
    subcategory: "Οδοντόβουρτσες",
    rating: 0.0,
    votesCount: 0,
    price: 2.5,
    discount: 0,
    stock: 150,
    image: "images/odontobourtsa.jpg"
  },
  {
    id: "25",
    title: "Στοματικό Διάλυμα Listerine 500ml",
    description: "Στοματικό διάλυμα για ολοκληρωμένη στοματική υγιεινή.",
    category: "Προϊόντα στοματικής υγιεινής",
    subcategory: "Στοματικά διαλύματα",
    rating: 0.0,
    votesCount: 0,
    price: 4.5,
    discount: 20,
    stock: 100,
    image: "images/listerin.jpg"
  },
  {
    id: "26",
    title: "Πάνες Ενηλίκων Large 20τμχ",
    description: "Πάνες ενηλίκων με μέγιστη απορροφητικότητα.",
    category: "Πάνες",
    subcategory: "Πάνες ενηλίκων",
    rating: 0.0,
    votesCount: 0,
    price: 14.0,
    discount: 0,
    stock: 40,
    image: "images/panes.jpeg"
  },
  {
    id: "27",
    title: "Μούσλι με Ξηρούς Καρπούς 500g",
    description: "Μούσλι με ξηρούς καρπούς για ένα θρεπτικό πρωινό.",
    category: "Δημητριακά",
    subcategory: "Μούσλι",
    rating: 0.0,
    votesCount: 0,
    price: 3.0,
    discount: 0,
    stock: 100,
    image: "images/mousli.jpeg"
  },
  {
    id: "28",
    title: "Βρώμη Ολικής Άλεσης 500g",
    description: "Βρώμη ολικής άλεσης για υγιεινά πρωινά και σνακ.",
    category: "Δημητριακά",
    subcategory: "Βρώμη",
    rating: 0.0,
    votesCount: 0,
    price: 2.2,
    discount: 0,
    stock: 120,
    image: "images/brvmh.jpg"
  },
  {
    id: "29",
    title: "Κριθαράκι 500g",
    description: "Κλασικό κριθαράκι για γιουβέτσι και παραδοσιακά πιάτα.",
    category: "Ζυμαρικά",
    subcategory: "Κριθαράκι",
    rating: 0.0,
    votesCount: 0,
    price: 1.0,
    discount: 25,
    stock: 150,
    image: "images/kritharaki.jpg"
  },
  {
    id: "30",
    title: "Ταλιατέλες 500g",
    description: "Φαρδιές ταλιατέλες από σιμιγδάλι για μαγειρικά πιάτα.",
    category: "Ζυμαρικά",
    subcategory: "Ταλιατέλες",
    rating: 0.0,
    votesCount: 0,
    price: 1.8,
    discount: 0,
    stock: 130,
    image: "images/taliateles.jpg"
  },
  {
    id: "31",
    title: "Κράκερς Σίκαλης 200g",
    description: "Κράκερς σίκαλης με χαμηλά λιπαρά για σνακ.",
    category: "Σνακ",
    subcategory: "Κράκερς",
    rating: 0.0,
    votesCount: 0,
    price: 2.0,
    discount: 0,
    stock: 140,
    image: "images/krakers.jpg"
  },
  {
    id: "32",
    title: "Μπάρες Δημητριακών με Σοκολάτα 6x25g",
    description: "Μπάρες δημητριακών με επικάλυψη σοκολάτας για ενέργεια.",
    category: "Σνακ",
    subcategory: "Μπάρες δημητριακών",
    rating: 0.0,
    votesCount: 0,
    price: 3.5,
    discount: 0,
    stock: 90,
    image: "images/mpares.jpg"
  },
  {
    id: "33",
    title: "Ηλιέλαιο 1lt",
    description: "Ηλιέλαιο ιδανικό για τηγάνισμα και μαγειρική χρήση.",
    category: "Έλαια",
    subcategory: "Ηλιέλαιο",
    rating: 0.0,
    votesCount: 0,
    price: 2.8,
    discount: 15,
    stock: 200,
    image: "images/hlielaio.jpg"
  },
  {
    id: "34",
    title: "Σογιέλαιο 1lt",
    description: "Σογιέλαιο για ελαφριά μαγειρική και σαλάτες.",
    category: "Έλαια",
    subcategory: "Σογιέλαιο",
    rating: 0.0,
    votesCount: 0,
    price: 3.0,
    discount: 0,
    stock: 149,
    image: "images/sogielaio.jpg"
  },
  {
    id: "35",
    title: "Κονσέρβα Φασόλια 400g",
    description: "Φασόλια σε κονσέρβα έτοιμα για κατανάλωση.",
    category: "Κονσέρβες",
    subcategory: "Κονσέρβες λαχανικών",
    rating: 0.0,
    votesCount: 0,
    price: 1.8,
    discount: 0,
    stock: 100,
    image: "images/fasolia.jpg"
  },
  {
    id: "36",
    title: "Κονσέρβα Ροδάκινα 400g",
    description: "Γλυκά ροδάκινα σε σιρόπι, έτοιμα για κατανάλωση.",
    category: "Κονσέρβες",
    subcategory: "Κονσέρβες φρούτων",
    rating: 0.0,
    votesCount: 0,
    price: 2.0,
    discount: 0,
    stock: 80,
    image: "images/rodakina.jpg"
  },
  {
    id: "37",
    title: "Χαρτοπετσέτες 100 τεμάχια",
    description: "Απορροφητικές χαρτοπετσέτες για καθημερινή χρήση.",
    category: "Χαρτικά",
    subcategory: "Χαρτοπετσέτες",
    rating: 0.0,
    votesCount: 0,
    price: 2.5,
    discount: 10,
    stock: 300,
    image: "images/xartopetsetes.jpg"
  },
  {
    id: "38",
    title: "Χαρτομάντηλα 10x10τμχ",
    description: "Χαρτομάντηλα σε ατομική συσκευασία για εύκολη μεταφορά.",
    category: "Χαρτικά",
    subcategory: "Χαρτομάντηλα",
    rating: 0.0,
    votesCount: 0,
    price: 1.5,
    discount: 0,
    stock: 400,
    image: "images/xartomanthla.jpg"
  }
];

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  // Modals / Sidebars States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // States για Ιστορικό, Αγαπημένα & Ψήφους
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [allVotes, setAllVotes] = useState([]);

  // Authentication States
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  // Admin States (Προσθήκη)
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('Φρέσκα τρόφιμα');
  const [newPrice, setNewPrice] = useState('');
  const [newDiscount, setNewDiscount] = useState('');
  const [newStock, setNewStock] = useState('');
  const [newMeasure, setNewMeasure] = useState('κιλά');
  const [newImage, setNewImage] = useState('');

  // Admin States (Επεξεργασία)
  const [editingProduct, setEditingProduct] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editDiscount, setEditDiscount] = useState('');
  const [editStock, setEditStock] = useState('');
  const [editMeasure, setEditMeasure] = useState('');
  const [editImage, setEditImage] = useState('');

  // States για κατηγορία
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Όλα");

  const safeNumber = (val) => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
  };

  // Helper για υπολογισμό τελικής τιμής βάσει έκπτωσης %
  const getFinalPrice = (product) => {
    if (!product) return 0;
    const basePrice = safeNumber(product.price);
    const discount = safeNumber(product.discount);
    if (discount > 0 && discount <= 100) {
      return basePrice * (1 - discount / 100);
    }
    return basePrice;
  };

  const handleImageFileUpload = (file, callback) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // 1. ΑΡΧΙΚΟΠΟΙΗΣΗ ΔΕΔΟΜΕΝΩΝ
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem('app_products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        localStorage.setItem('app_products', JSON.stringify(initialProducts));
        setProducts(initialProducts);
      }

      const savedVotes = localStorage.getItem('app_userVotes');
      if (savedVotes) {
        setAllVotes(JSON.parse(savedVotes));
      } else {
        localStorage.setItem('app_userVotes', JSON.stringify([]));
      }
    } catch (err) {
      console.error("Error loading initial localStorage:", err);
      setProducts(initialProducts);
    }
  }, []);

  // 2. ΦΟΡΤΩΣΗ ΔΕΔΟΜΕΝΩΝ ΧΡΗΣΤΗ (ΜΟΝΟ ΓΙΑ ΑΠΛΟΥΣ USERS)
  useEffect(() => {
    if (user && user.role !== "admin") {
      try {
        const savedCart = localStorage.getItem(`cart_${user.username}`);
        setCart(savedCart ? JSON.parse(savedCart) : []);

        const allOrders = JSON.parse(localStorage.getItem('app_orders') || '[]');
        setOrders(allOrders.filter(o => o.userId === user.username));

        const allFavs = JSON.parse(localStorage.getItem('app_favorites') || '[]');
        setFavorites(allFavs.filter(f => f.userId === user.username));
      } catch (err) {
        console.error("Error loading user data:", err);
      }
    } else {
      setCart([]);
      setOrders([]);
      setFavorites([]);
    }
  }, [user]);

  // Αποθήκευση Καλαθιού (ΜΟΝΟ ΓΙΑ ΑΠΛΟΥΣ USERS)
  useEffect(() => {
    if (user && user.role !== "admin") {
      localStorage.setItem(`cart_${user.username}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  // LOGIN & REGISTER
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setAuthMessage("ΜΗ ΕΓΚΥΡΗ ΣΥΝΔΕΣΗ");
      return;
    }

    // 1. ΕΙΔΙΚΟΣ ΕΛΕΓΧΟΣ ΜΟΝΟ ΓΙΑ ΤΟΝ ADMINISTRATOR
    if (username === "admin" && password === "admin") {
      const adminUser = { username: "admin", firstName: "Admin", role: "admin" };
      setUser(adminUser);
      setAuthMessage('');
      return;
    }

    // 2. ΕΛΕΓΧΟΣ ΚΑΙ ΣΥΝΔΕΣΗ ΓΙΑ ΑΠΛΟΥΣ ΧΡΗΣΤΕΣ (USERS)
    try {
      const allUsers = JSON.parse(localStorage.getItem('app_users') || '[]');
      const foundUser = allUsers.find(u => u.username === username);

      if (foundUser) {
        if (foundUser.password === password) {
          setUser(foundUser);
          setAuthMessage('');
        } else {
          setAuthMessage("Λανθασμένος κωδικός πρόσβασης.");
        }
      } else {
        // Αν δεν υπάρχει ο χρήστης, προτρέπουμε σε εγγραφή
        setIsRegistering(true);
        setAuthMessage("Το username δεν υπάρχει. Εισάγετε στοιχεία για εγγραφή.");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("ΜΗ ΕΓΚΥΡΗ ΣΥΝΔΕΣΗ");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem('app_users') || '[]');
    const newCustomer = {
      id: username,
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: "customer"
    };

    localStorage.setItem('app_users', JSON.stringify([...allUsers, newCustomer]));
    setUser(newCustomer);
    setIsRegistering(false);
    setAuthMessage('');
  };

  // ΚΑΛΑΘΙ & CHECKOUT
  const addToCart = (product) => {
    const isAlreadyInCart = cart.some(item => String(item.id) === String(product.id));

    setCart((prevCart) => {
      const existingItem = prevCart.find(item => String(item.id) === String(product.id));
      if (existingItem) {
        return prevCart.map(item => String(item.id) === String(product.id) ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    if (!isAlreadyInCart) {
      alert(`Το προϊόν "${product.title}" προστέθηκε στο καλάθι! 🛒`);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => String(item.id) === String(productId));
      if (existingItem && existingItem.quantity === 1) {
        return prevCart.filter(item => String(item.id) !== String(productId));
      } else {
        return prevCart.map(item => String(item.id) === String(productId) ? { ...item, quantity: item.quantity - 1 } : item);
      }
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    for (const item of cart) {
      const originalProduct = products.find(p => String(p.id) === String(item.id));
      if (originalProduct && originalProduct.stock < item.quantity) {
        alert(`Δεν υπάρχει αρκετό απόθεμα για το προϊόν: ${item.title} (Διαθέσιμο: ${originalProduct.stock})`);
        return;
      }
    }

    const newOrder = {
      id: String(Date.now()),
      userId: user.username,
      date: new Date().toLocaleDateString('el-GR') + " " + new Date().toLocaleTimeString('el-GR'),
      items: cart.map(item => {
        const liveProd = products.find(p => String(p.id) === String(item.id));
        const priceToUse = liveProd ? getFinalPrice(liveProd) : getFinalPrice(item);
        return { title: liveProd ? liveProd.title : item.title, price: priceToUse, quantity: item.quantity };
      }),
      total: totalCost
    };

    const allOrders = JSON.parse(localStorage.getItem('app_orders') || '[]');
    localStorage.setItem('app_orders', JSON.stringify([newOrder, ...allOrders]));
    setOrders([newOrder, ...orders]);

    const updatedProducts = products.map(prod => {
      const cartItem = cart.find(item => String(item.id) === String(prod.id));
      if (cartItem) {
        return { ...prod, stock: prod.stock - cartItem.quantity };
      }
      return prod;
    });

    localStorage.setItem('app_products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    setCart([]);
    localStorage.removeItem(`cart_${user.username}`);
    setIsCartOpen(false);
    alert("Η παραγγελία ολοκληρώθηκε επιτυχώς!");
  };

  // ΑΓΑΠΗΜΕΝΑ
  const toggleFavorite = (product) => {
    if (!user) return;

    const prodIdStr = String(product.id);
    const allFavs = JSON.parse(localStorage.getItem('app_favorites') || '[]');
    const existingIndex = allFavs.findIndex(item => String(item.productId) === prodIdStr && item.userId === user.username);

    let updatedFavs;
    if (existingIndex > -1) {
      updatedFavs = allFavs.filter((_, idx) => idx !== existingIndex);
      alert(`${product.title} αφαιρέθηκε από τα αγαπημένα!`);
    } else {
      const newFav = {
        id: String(Date.now()),
        userId: user.username,
        productId: prodIdStr,
        title: product.title,
        price: getFinalPrice(product)
      };
      updatedFavs = [...allFavs, newFav];
      alert(`${product.title} προστέθηκε στα αγαπημένα!`);
    }

    localStorage.setItem('app_favorites', JSON.stringify(updatedFavs));
    setFavorites(updatedFavs.filter(f => f.userId === user.username));
  };

  // ΒΑΘΜΟΛΟΓΙΕΣ
  const handleVote = (product, newRating) => {
    if (!user) return;

    const prodIdStr = String(product.id);
    const savedVotes = JSON.parse(localStorage.getItem('app_userVotes') || '[]');

    const hasVoted = savedVotes.some(v => v.userId === user.username && String(v.productId) === prodIdStr);
    if (hasVoted) {
      alert("Έχετε ήδη βαθμολογήσει αυτό το προϊόν!");
      return;
    }

    const newVote = {
      userId: user.username,
      productId: prodIdStr,
      score: safeNumber(newRating)
    };

    const updatedVotes = [...savedVotes, newVote];
    localStorage.setItem('app_userVotes', JSON.stringify(updatedVotes));
    setAllVotes(updatedVotes);
  };

  // ADMIN OPERATIONS
  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: String(Date.now()),
      title: newTitle,
      description: newDescription,
      category: newCategory,
      subcategory: "Γενικά",
      price: safeNumber(newPrice),
      discount: safeNumber(newDiscount),
      stock: parseInt(newStock) || 0,
      measure: newMeasure,
      image: newImage || "images/default.jpg"
    };

    const updatedProducts = [...products, newProduct];
    localStorage.setItem('app_products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    setNewTitle('');
    setNewDescription('');
    setNewPrice('');
    setNewDiscount('');
    setNewStock('');
    setNewImage('');
    alert("Το προϊόν προστέθηκε επιτυχώς!");
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το προϊόν;")) {
      const prodIdStr = String(productId);

      const updatedProducts = products.filter(p => String(p.id) !== prodIdStr);
      localStorage.setItem('app_products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);

      const allFavs = JSON.parse(localStorage.getItem('app_favorites') || '[]');
      const updatedFavs = allFavs.filter(fav => String(fav.productId) !== prodIdStr);
      localStorage.setItem('app_favorites', JSON.stringify(updatedFavs));
      if (user) {
        setFavorites(updatedFavs.filter(f => f.userId === user.username));
      }

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cart_')) {
          const userCart = JSON.parse(localStorage.getItem(key) || '[]');
          const updatedUserCart = userCart.filter(item => String(item.id) !== prodIdStr);
          localStorage.setItem(key, JSON.stringify(updatedUserCart));
        }
      }

      setCart(prevCart => prevCart.filter(item => String(item.id) !== prodIdStr));

      alert("Το προϊόν διαγράφηκε επιτυχώς και αφαιρέθηκε από όλα τα καλάθια/αγαπημένα!");
    }
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setEditTitle(product.title);
    setEditDescription(product.description);
    setEditCategory(product.category);
    setEditPrice(product.price);
    setEditDiscount(product.discount || 0);
    setEditStock(product.stock);
    setEditMeasure(product.measure || 'κιλά');
    setEditImage(product.image || '');
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedPrice = safeNumber(editPrice);
    const updatedDiscount = safeNumber(editDiscount);
    const updatedProducts = products.map(p => {
      if (p.id === editingProduct.id) {
        return {
          ...p,
          title: editTitle,
          description: editDescription,
          category: editCategory,
          price: updatedPrice,
          discount: updatedDiscount,
          stock: parseInt(editStock) || 0,
          measure: editMeasure,
          image: editImage || "images/default.jpg"
        };
      }
      return p;
    });

    localStorage.setItem('app_products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    const allFavs = JSON.parse(localStorage.getItem('app_favorites') || '[]');
    const updatedFavs = allFavs.map(fav => {
      if (String(fav.productId) === String(editingProduct.id)) {
        const liveProd = updatedProducts.find(prod => String(prod.id) === String(editingProduct.id));
        return { ...fav, title: editTitle, price: getFinalPrice(liveProd) };
      }
      return fav;
    });
    localStorage.setItem('app_favorites', JSON.stringify(updatedFavs));
    if (user) {
      setFavorites(updatedFavs.filter(f => f.userId === user.username));
    }

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('cart_')) {
        const userCart = JSON.parse(localStorage.getItem(key) || '[]');
        const updatedUserCart = userCart.map(item => {
          if (String(item.id) === String(editingProduct.id)) {
            const liveProd = updatedProducts.find(prod => String(prod.id) === String(editingProduct.id));
            return { ...item, title: editTitle, price: getFinalPrice(liveProd), image: editImage || item.image };
          }
          return item;
        });
        localStorage.setItem(key, JSON.stringify(updatedUserCart));
      }
    }

    setEditingProduct(null);
    alert("Το προϊόν ενημερώθηκε επιτυχώς!");
  };

  const totalCost = cart.reduce((sum, item) => {
    const currentProd = products.find(p => String(p.id) === String(item.id));
    const priceToUse = currentProd ? getFinalPrice(currentProd) : getFinalPrice(item);
    return sum + (priceToUse * (item.quantity || 1));
  }, 0);

  const totalItemsInCart = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const filteredProducts = (products || []).filter(p => {
    if (!p || !p.title) return false;

    let matchesCategory = false;
    if (selectedCategory === "Όλα") {
      matchesCategory = true;
    } else if (selectedCategory === "Προσφορές") {
      matchesCategory = safeNumber(p.discount) > 0;
    } else {
      matchesCategory = p.category === selectedCategory;
    }

    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ΑΥΣΤΗΡΟΣ ΚΑΘΟΡΙΣΜΟΣ ΑΝ Ο ΧΡΗΣΤΗΣ ΕΙΝΑΙ ADMIN
  const isAdmin = user && user.role === "admin";

  // LOGIN SCREEN
  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <p className="login-subtitle">My Market</p>
          <h2>{isRegistering ? 'Register Details' : 'Login'}</h2>
          {authMessage && <div className="auth-alert">{authMessage}</div>}
          {!isRegistering ? (
            <form onSubmit={handleLogin}>
              <div className="form-group"><label>Username:</label><input type="text" value={username} onChange={e => setUsername(e.target.value)} required /></div>
              <div className="form-group"><label>Password:</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></div>
              <button type="submit" className="btn-login">Σύνδεση</button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="form-group"><label>First Name:</label><input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required /></div>
              <div className="form-group"><label>Last Name:</label><input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required /></div>
              <button type="submit" className="btn-login">Ολοκλήρωση Εγγραφής</button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="eshop-container">
      {/* HEADER SECTION (NAVBAR & HERO BANNER) */}
      <header className="site-header">
        {/* TOP NAVBAR */}
        <nav className="navbar">
          <button className="nav-btn category-trigger-btn" onClick={() => setIsFilterOpen(true)}>
            ☰
          </button>

          <div className="logo">🛒 My Market</div>

          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Αναζήτηση προϊόντων..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="nav-links">
            <span className="welcome-text">👋 {user.firstName || user.username} {isAdmin ? "(Administrator)" : ""}</span>
            {!isAdmin && (
              <>
                <button className="nav-btn" onClick={() => { setIsFavoritesOpen(true); setIsCartOpen(false); setIsHistoryOpen(false); }}>
                  Favorites <span className="favorites-badge">{favorites.length}</span>
                </button>
                <button className="nav-btn" onClick={() => { setIsHistoryOpen(true); setIsCartOpen(false); setIsFavoritesOpen(false); }}>
                  History
                </button>
                <button className="nav-btn cart-btn" onClick={() => { setIsCartOpen(true); setIsHistoryOpen(false); setIsFavoritesOpen(false); }}>
                  Cart <span className="cart-badge">{totalItemsInCart}</span>
                </button>
              </>
            )}
            <button className="nav-btn logout-btn" onClick={() => { setUser(null); setCart([]); setFavorites([]); setIsCartOpen(false); setIsHistoryOpen(false); setIsFavoritesOpen(false); }}>
              Logout
            </button>
          </div>
        </nav>

        {/* HERO BANNER */}
        <section className="hero-banner">
          <div className="hero-content">
            <span className="hero-badge">Φρέσκα Τρόφιμα & Προσφορές</span>
            <h1>Φέρνουμε το Σουπερμάρκετ στην Πόρτα σας!</h1>
          </div>
        </section>
      </header>

      <div className="main-layout">
        <main className="content">

          {/* ADMIN PANEL FORM (ΕΜΦΑΝΙΖΕΤΑΙ ΜΟΝΟ ΣΤΟΝ ADMINISTRATOR) */}
          {isAdmin && (
            <section className="admin-panel-section">
              <h3> + Προσθήκη Νέου Προϊόντος (Admin Management)</h3>
              <form onSubmit={handleAddProduct} className="admin-form">
                <input type="text" placeholder="Τίτλος Προϊόντος" value={newTitle} onChange={e => setNewTitle(e.target.value)} required />
                <input type="text" placeholder="Περιγραφή" value={newDescription} onChange={e => setNewDescription(e.target.value)} required />
                <input type="number" step="0.01" placeholder="Αρχική Τιμή (€)" value={newPrice} onChange={e => setNewPrice(e.target.value)} required />
                <input type="number" step="1" placeholder="Έκπτωση (%)" value={newDiscount} onChange={e => setNewDiscount(e.target.value)} />
                <input type="number" placeholder="Απόθεμα (Stock)" value={newStock} onChange={e => setNewStock(e.target.value)} required />

                {/* Dropdown Κατηγορίας */}
                <select value={newCategory} onChange={e => setNewCategory(e.target.value)}>
                  <option value="Φρέσκα τρόφιμα">Φρέσκα τρόφιμα</option>
                  <option value="Κατεψυγμένα τρόφιμα">Κατεψυγμένα τρόφιμα</option>
                  <option value="Προϊόντα ψυγείου">Προϊόντα ψυγείου</option>
                  <option value="Αλλαντικά">Αλλαντικά</option>
                  <option value="Αλκοολούχα ποτά">Αλκοολούχα ποτά</option>
                  <option value="Μη αλκολούχα ποτά">Μη αλκολούχα ποτά</option>
                  <option value="Καθαριστικά για το σπίτι">Καθαριστικά για το σπίτι</option>
                  <option value="Απορρυπαντικά ρούχων">Απορρυπαντικά ρούχων</option>
                  <option value="Καλλυντικά">Καλλυντικά</option>
                  <option value="Προϊόντα στοματικής υγιεινής">Προϊόντα στοματικής υγιεινής</option>
                  <option value="Πάνες">Πάνες</option>
                  <option value="Δημητριακά">Δημητριακά</option>
                  <option value="Ζυμαρικά">Ζυμαρικά</option>
                  <option value="Σνακ">Σνακ</option>
                  <option value="Έλαια">Έλαια</option>
                  <option value="Κονσέρβες">Κονσέρβες</option>
                  <option value="Χαρτικά">Χαρτικά</option>
                </select>

                {/* Dropdown Μονάδας Μέτρησης */}
                <select value={newMeasure} onChange={e => setNewMeasure(e.target.value)}>
                  <option value="κιλά">κιλά</option>
                  <option value="τμχ">τμχ</option>
                </select>

                {/* Πεδίο Εικόνας */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Φωτογραφία Προϊόντος:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageFileUpload(e.target.files[0], setNewImage)}
                  />
                  <input
                    type="text"
                    placeholder="ή επικολλήστε Link/URL Εικόνας..."
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-admin-submit">Προσθήκη στο Κατάστημα</button>
              </form>
            </section>
          )}

          <div className="product-grid">
            {filteredProducts.map((product) => {
              const productVotes = (allVotes || []).filter(v => String(v.productId) === String(product.id));
              const totalScore = productVotes.reduce((acc, v) => acc + safeNumber(v.score), 0);
              const averageRating = productVotes.length > 0 ? (totalScore / productVotes.length) : 0;
              const isFav = favorites.some(item => String(item.productId) === String(product.id) && item.userId === user.username);

              const discount = safeNumber(product.discount);
              const finalPrice = getFinalPrice(product);

              return (
                <div key={product.id} className="product-card">
                  {/* Offer Badge */}
                  {discount > 0 && (
                    <div className="offer-badge">-{discount}%</div>
                  )}

                  {isAdmin && (
                    <div className="admin-actions-container">
                      <button
                        className="btn-admin-icon"
                        onClick={() => startEditing(product)}
                        title="Επεξεργασία Προϊόντος"
                      >
                        ✏️
                      </button>
                      <button
                        className="btn-admin-icon"
                        onClick={() => handleDeleteProduct(product.id)}
                        title="Διαγραφή Προϊόντος"
                      >
                        🗑️
                      </button>
                    </div>
                  )}

                  <div className="category-badge">{product.category}</div>
                  <div className="product-image-container">
                    <img
                      src={
                        product.image
                          ? product.image.startsWith('http') || product.image.startsWith('data:')
                            ? product.image
                            : `${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`
                          : `${import.meta.env.BASE_URL}images/default.jpg`
                      }
                      alt={product.title}
                      className="product-img"
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`;
                      }}
                    />
                  </div>
                  <h3>{product.title}</h3>
                  <p className="description">{product.description}</p>

                  <div className="product-details">
                    <div className="price-container">
                      {discount > 0 ? (
                        <>
                          <span className="original-price">{safeNumber(product.price).toFixed(2)}€</span>
                          <span className="discounted-price">{finalPrice.toFixed(2)}€</span>
                        </>
                      ) : (
                        <span className="price">{finalPrice.toFixed(2)}€</span>
                      )}
                    </div>
                    <span className="stock">Απόθεμα: {product.stock} {product.measure}</span>
                  </div>

                  <div className="rating-container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const hasVoted = productVotes.some(v => v.userId === user?.username);
                          const isClickable = !isAdmin && !hasVoted;
                          const fillPercentage = Math.min(Math.max((averageRating - star + 1) * 100, 0), 100);

                          return (
                            <div
                              key={star}
                              className="star-container"
                              style={{ cursor: isClickable ? 'pointer' : 'default' }}
                              onClick={() => {
                                if (!isClickable) return;
                                handleVote(product, star);
                              }}
                            >
                              <span className="star-empty-bg">★</span>
                              <span
                                className="star-filled-fg"
                                style={{ width: `${fillPercentage}%` }}
                              >
                                ★
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#555555' }}>
                        ({averageRating.toFixed(1)})
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', color: 'green', marginTop: '5px' }}>
                      Αξιολογήθηκε από: {productVotes.length} χρήστες
                    </div>
                  </div>

                  <div className="card-actions">
                    {!isAdmin && (
                      <>
                        <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
                        <button className={`btn-fav ${isFav ? 'active' : ''}`} onClick={() => toggleFavorite(product)}>
                          {isFav ? '❤️' : '🤍'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* SIDEBAR: ΚΑΛΑΘΙ (ΜΟΝΟ ΓΙΑ USERS) */}
        {!isAdmin && isCartOpen && (
          <aside className="sidebar-panel">
            <div className="panel-header"><h3>Το Καλάθι μου 🛒</h3><button onClick={() => setIsCartOpen(false)}>×</button></div>
            {cart.length === 0 ? <p className="empty-msg">Το καλάθι είναι άδειο.</p> : (
              <div className="panel-content">
                {cart.map(item => {
                  const currentProduct = products.find(p => String(p.id) === String(item.id));
                  const livePrice = currentProduct ? getFinalPrice(currentProduct) : getFinalPrice(item);
                  const liveTitle = currentProduct ? currentProduct.title : item.title;

                  return (
                    <div key={item.id} className="item-row">
                      <div>
                        <h4>{liveTitle}</h4>
                        <p>{livePrice.toFixed(2)}€ x {item.quantity}</p>
                      </div>
                      <div className="qty-actions">
                        <button onClick={() => removeFromCart(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    </div>
                  );
                })}
                <div className="panel-summary">
                  <div className="total-row"><span>Σύνολο: </span><span>{totalCost.toFixed(2)}€</span></div>
                  <button className="btn-checkout" onClick={handleCheckout}>Ολοκλήρωση Αγοράς </button>
                </div>
              </div>
            )}
          </aside>
        )}

        {/* SIDEBAR: ΑΓΑΠΗΜΕΝΑ (ΜΟΝΟ ΓΙΑ USERS) */}
        {!isAdmin && isFavoritesOpen && (
          <aside className="sidebar-panel">
            <div className="panel-header">
              <h3>Αγαπημένα </h3>
              <button onClick={() => setIsFavoritesOpen(false)}>×</button>
            </div>

            {favorites.length === 0 ? (
              <p className="empty-msg">Δεν έχετε προσθέσει αγαπημένα.</p>
            ) : (
              <div className="panel-content">
                {favorites.map(item => {
                  const currentProduct = products.find(p => String(p.id) === String(item.productId));
                  const livePrice = currentProduct ? getFinalPrice(currentProduct) : safeNumber(item.price);
                  const liveTitle = currentProduct ? currentProduct.title : item.title;

                  return (
                    <div key={item.id} className="item-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #edf2f7' }}>
                      <div>
                        <h4>{liveTitle}</h4>
                        <p>{livePrice.toFixed(2)}€</p>
                      </div>

                      <div className="fav-sidebar-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <button className="btn-add-small" onClick={() => {
                          const prod = products.find(p => String(p.id) === String(item.productId));
                          if (prod) addToCart(prod);
                        }}
                        title="Προσθήκη στο καλάθι"
                      >
                        🛒
                      </button>

                        <button
                          className="btn-remove-small"
                          onClick={() => {
                            const productMock = { id: item.productId, title: liveTitle, price: livePrice };
                            toggleFavorite(productMock);
                          }}
                          title="Αφαίρεση από τα αγαπημένα"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </aside>
        )}

        {/* SIDEBAR: ΦΙΛΤΡΑ ΚΑΤΗΓΟΡΙΩΝ */}
        {isFilterOpen && (
          <aside className="sidebar-panel" style={{ left: 0, right: 'auto', zIndex: 1001 }}>
            <div className="panel-header">
              <h3>Κατηγορίες</h3>
              <button onClick={() => setIsFilterOpen(false)}>×</button>
            </div>

            <div className="panel-content">
              <button
                className="category-btn"
                onClick={() => { setSelectedCategory("Όλα"); setIsFilterOpen(false); }}
              >
                Όλα τα Προϊόντα
              </button>

              <button
                className="category-btn"
                style={{ backgroundColor: '#ffe6e6', color: '#e50f0f', fontWeight: 'bold' }}
                onClick={() => { setSelectedCategory("Προσφορές"); setIsFilterOpen(false); }}
              >
                🏷️ Προσφορές
              </button>

              {[...new Set(products.map(p => p.category))].map(cat => (
                <button
                  key={cat}
                  className="category-btn"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsFilterOpen(false);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* SIDEBAR: ΙΣΤΟΡΙΚΟ ΠΑΡΑΓΓΕΛΙΩΝ (ΜΟΝΟ ΓΙΑ USERS) */}
        {!isAdmin && isHistoryOpen && (
          <aside className="sidebar-panel">
            <div className="panel-header"><h3>Ιστορικό Αγορών </h3><button onClick={() => setIsHistoryOpen(false)}>×</button></div>
            {orders.length === 0 ? <p className="empty-msg">Δεν έχετε κάνει αγορές ακόμα.</p> : (
              <div className="panel-content scrollable">
                {orders.map(order => (
                  <div key={order.id} className="order-box">
                    <div className="order-meta"><span>📅 {order.date}</span></div>
                    <div className="order-items">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="order-item-line">{item.title} (x{item.quantity}) - {(safeNumber(item.price) * item.quantity).toFixed(2)}€</div>
                      ))}
                    </div>
                    <div className="order-total">Σύνολο: {safeNumber(order.total).toFixed(2)}€</div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        )}
      </div>

      {/* MODAL ΕΠΕΞΕΡΓΑΣΙΑΣ ΠΡΟΪΟΝΤΟΣ (ADMIN) */}
      {isAdmin && editingProduct && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="panel-header">
              <h3>✏️ Επεξεργασία Προϊόντος</h3>
              <button onClick={() => setEditingProduct(null)}>×</button>
            </div>

            <form onSubmit={handleUpdateProduct} className="admin-form" style={{ marginTop: '15px' }}>
              <div className="form-group">
                <label>Τίτλος:</label>
                <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} required />
              </div>

              <div className="form-group">
                <label>Περιγραφή:</label>
                <input type="text" value={editDescription} onChange={e => setEditDescription(e.target.value)} required />
              </div>

              <div className="form-group">
                <label>Αρχική Τιμή (€):</label>
                <input type="number" step="0.01" value={editPrice} onChange={e => setEditPrice(e.target.value)} required />
              </div>

              <div className="form-group">
                <label>Έκπτωση (%):</label>
                <input type="number" step="1" value={editDiscount} onChange={e => setEditDiscount(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Απόθεμα:</label>
                <input type="number" value={editStock} onChange={e => setEditStock(e.target.value)} required />
              </div>

              <div className="form-group">
                <label>Κατηγορία:</label>
                <select value={editCategory} onChange={e => setEditCategory(e.target.value)}>
                  <option value="Φρέσκα τρόφιμα">Φρέσκα τρόφιμα</option>
                  <option value="Κατεψυγμένα τρόφιμα">Κατεψυγμένα τρόφιμα</option>
                  <option value="Προϊόντα ψυγείου">Προϊόντα ψυγείου</option>
                  <option value="Αλλαντικά">Αλλαντικά</option>
                  <option value="Αλκοολούχα ποτά">Αλκοολούχα ποτά</option>
                  <option value="Μη αλκολούχα ποτά">Μη αλκολούχα ποτά</option>
                  <option value="Καθαριστικά για το σπίτι">Καθαριστικά για το σπίτι</option>
                  <option value="Απορρυπαντικά ρούχων">Απορρυπαντικά ρούχων</option>
                  <option value="Καλλυντικά">Καλλυντικά</option>
                  <option value="Προϊόντα στοματικής υγιεινής">Προϊόντα στοματικής υγιεινής</option>
                  <option value="Πάνες">Πάνες</option>
                  <option value="Δημητριακά">Δημητριακά</option>
                  <option value="Ζυμαρικά">Ζυμαρικά</option>
                  <option value="Σνακ">Σνακ</option>
                  <option value="Έλαια">Έλαια</option>
                  <option value="Κονσέρβες">Κονσέρβες</option>
                  <option value="Χαρτικά">Χαρτικά</option>
                </select>
              </div>

              <div className="form-group">
                <label>Μονάδα Μέτρησης:</label>
                <select value={editMeasure} onChange={e => setEditMeasure(e.target.value)}>
                  <option value="κιλά">κιλά</option>
                  <option value="τμχ">τμχ</option>
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>Αλλαγή Φωτογραφίας:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageFileUpload(e.target.files[0], setEditImage)}
                />
                <input
                  type="text"
                  placeholder="ή επικολλήστε νέο Link/URL Εικόνας..."
                  value={editImage}
                  onChange={e => setEditImage(e.target.value)}
                  style={{ marginTop: '5px' }}
                />
                {editImage && (
                  <div style={{ marginTop: '8px', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#666' }}>Προεπισκόπηση:</span>
                    <img src={editImage} alt="Preview" style={{ height: '50px', objectFit: 'contain', display: 'block', margin: '5px auto' }} />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px', gridColumn: 'span 2' }}>
                <button type="submit" className="btn-admin-submit" style={{ flex: 1 }}>Αποθήκευση Αλλαγών</button>
                <button type="button" onClick={() => setEditingProduct(null)} className="btn-login" style={{ background: '#a0aec0', flex: 1 }}>Ακύρωση</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER SECTION */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>🛒 My Market</h3>
            <p>Φέρνουμε τα πιο φρέσκα προϊόντα και τις καλύτερες προσφορές κατευθείαν στην πόρτα σας με ασφάλεια και ταχύτητα.</p>
          </div>

          <div className="footer-column">
            <h4>Γρήγοροι Σύνδεσμοι</h4>
            <ul>
              <li><a href="#hero" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Αρχική Σελίδα</a></li>
              <li><a href="#categories" onClick={() => setIsFilterOpen(true)}>Κατηγορίες Προϊόντων</a></li>
              <li><a href="#offers" onClick={() => { setSelectedCategory("Προσφορές"); window.scrollTo({ top: 400, behavior: 'smooth' }); }}>Προσφορές</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Εξυπηρέτηση Πελατών</h4>
            <ul>
              <li>📞 Τηλέφωνο: 210 1234567</li>
              <li>✉️ Email: support@mymarket.gr</li>
              <li>⏰ Ωράριο: Δευ - Σαβ: 08:00 - 21:00</li>
              <li>📍 Διεύθυνση: Θεσσαλονίκη, Ελλάδα</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Τρόποι Πληρωμής</h4>
            <div className="payment-methods">
              <span title="Πιστωτική / Χρεωστική Κάρτα">
                <FaCreditCard />
              </span>
              <span title="Apple Pay">
                <FaApplePay />
              </span>
              <span title="Google Pay">
                <FaGooglePay />
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Market E-Shop</p>
        </div>
      </footer>

    </div>
  );
}

export default App;