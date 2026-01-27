

export interface UserProfile {
    uid?: string;
    name?: string;
    email?: string;
    password?: string;
    profilePicture?: string;
    phone?: string;
    signupDate?: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    subscriptionPlan?: string;
    subscriptionExpiry?: string;
    whatsappSupportExpiry?: string;
    isPremium?: boolean;
    downloadsConsumed?: number;
    downloadsLimit?: number;
    chatMessagesSent?: number;
    isOnline?: boolean; 
    lastActive?: any; 
    wishlist?: string[];
    cart?: CartItem[];
    lat?: number;
    lng?: number;
    /** Fix: Added missing birth-related fields for UserProfile */
    dob?: string;
    timeOfBirth?: string;
    placeOfBirth?: string;
}

/** Fix: Added missing UserInput interface */
export interface UserInput {
    name?: string;
    dob?: string;
    timeOfBirth?: string;
    placeOfBirth?: string;
    image?: File;
    question?: string;
    selectedZodiac?: string;
    selectedMonth?: string;
    targetLanguage?: string;
    zodiacSign?: string;
    horoscopeType?: 'weekly' | 'monthly' | 'daily';
    boyName?: string;
    boyDob?: string;
    girlName?: string;
    girlDob?: string;
    name1?: string;
    name2?: string;
    voice?: 'female' | 'male';
    startLocation?: string;
    endLocation?: string;
    storyPremise?: string;
    resolution?: '720p' | '1080p';
    aspectRatio?: '16:9' | '9:16';
    category?: string;
    autoRenew?: boolean;
    characters?: string;
    setting?: string;
    visualStyle?: string;
    musicStyle?: string;
    addVoiceOver?: boolean;
    addCaptions?: boolean;
    desiredDuration?: string;
}

/** Fix: Added missing Reading interface */
export interface Reading {
    past: string;
    present: string;
    future: string;
    result: string;
    imageUrl?: string;
    videoUrl?: string;
}

/** Fix: Added missing SavedReading interface */
export interface SavedReading {
    id: string;
    date: string;
    divinationType: DivinationType;
    reading: Reading;
}

/** Fix: Added missing Place interface */
export interface Place {
    name: string;
    address: string;
}

export interface VerificationRequest {
    id: string;
    userName: string;
    userPhone: string;
    userEmail?: string;
    planName: string;
    planPrice: number;
    screenshotDataUrl?: string;
    requestDate: string;
    type: 'SUBSCRIPTION' | 'PRODUCT' | 'SUPPORT_CHAT';
    transactionId?: string;
    orderId?: string;
    autoRenew?: boolean;
}

export interface SupportTicket {
    id: string;
    userName: string;
    userPhone: string;
    category: string;
    description: string;
    status: 'Open' | 'Closed' | 'Refunded';
    createdAt: string;
    bankDetails?: {
        accountHolderName: string;
        accountNumber: string;
        ifscCode: string;
        bankName: string;
    };
    refundOrderId?: string;
}

export interface SocialMediaPost {
  id: string;
  content: string;
  imageUrl?: string;
  platforms: string[];
  createdAt: string;
}

export interface ProductComment {
    id: string;
    userName: string;
    comment: string;
    rating: number;
    createdAt: any;
}

export interface ChatMessage {
    id: string;
    senderUid: string;
    senderName: string;
    senderEmail: string;
    senderPhoto: string;
    recipientUid: string;
    text: string;
    category: string;
    senderLocation: string;
    createdAt: any;
}

export interface CustomerDetails {
    name: string;
    phone: string;
    email: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    whatsapp?: string;
    landmark?: string;
    country?: string;
}

/** Fix: Expanded DivinationType with all missing members referenced in the application */
export enum DivinationType {
    PUJAN_SAMAGRI = 'पूजन सामग्री (Pujan Samagri)',
    TANTRA_MANTRA_YANTRA_EBOOK = 'ई-बुक्स (E-Books Library)',
    MOBILE_ACCESSORIES = 'मोबाइल एक्सेसरीज (Mobile Accessories)',
    GEMS_JEWELRY = 'रत्न आभूषण (Gems & Jewelry)',
    LADIES_GENTS_BABY_SHOES = 'जूते और फुटवियर (Shoes & Footwear)',
    LADIES_GENTS_ACCESSORIES = 'पर्स और बेल्ट (Bags & Belts)',
    COMPUTER_COURSE = 'कंप्यूटर कोर्स (Computer Course)',
    MOBILE_REPAIRING_COURSE = 'मोबाइल रिपेयरिंग (Mobile Repairing)',
    SKILL_LEARNING = 'स्किल सीखें (Skill Learning)',
    BUSINESS_MOTIVATION = 'बिज़नेस स्टोरी (Business Stories)',
    AUDIO_STORY = 'ऑडियो कहानी (Audio Stories)',
    PALMISTRY = 'हस्तरेखा (Palmistry)',
    AI_FACE_READING = 'चेहरा पढ़ना (Face Reading)',
    DAILY_FORTUNE_CARD = 'दैनिक भाग्य कार्ड (Daily Fortune Card)',
    ASTROLOGY = 'ज्योतिष (Astrology)',
    NUMEROLOGY = 'अंकज्योतिष (Numerology)',
    BUSINESS_ASTROLOGY = 'व्यापार ज्योतिष (Business Astrology)',
    CODE_INSPECTOR = 'कोड इंस्पेक्टर (Code Inspector)',
    ROUTE_PLANNER = 'मार्ग नियोजक (Route Planner)',
    YOGA_GUIDE_HINDI = 'योग गाइड (Yoga Guide)',
    STORY_TO_VIDEO = 'कहानी से वीडियो (Story to Video)',
    FUTURE_STORY = 'भविष्य की कहानी (Future Story)',
    IMAGE_TO_VIDEO = 'चित्र से वीडियो (Image to Video)',
    JANAM_KUNDLI = 'जन्म कुंडली (Janam Kundli)',
    AI_TIME_MACHINE = 'समय यात्रा (AI Time Machine)',
    OBJECT_COUNTER = 'वस्तु गणक (Object Counter)',
    PRODUCT_SCANNER = 'उत्पाद स्कैनर (Product Scanner)',
    MARRIAGE_COMPATIBILITY = 'विवाह अनुकूलता (Marriage Compatibility)',
    LOVE_COMPATIBILITY = 'प्रेम अनुकूलता (Love Compatibility)',
    TAROT = 'टैरो रीडिंग (Tarot Reading)',
    PRASHNA_CHAKRA = 'प्रश्न चक्र (Prashna Chakra)',
    DREAM = 'सपना विश्लेषण (Dream Analysis)',
    AI_FUTURE_GENERATOR = 'भविष्य जनरेटर (AI Future Generator)',
    HOROSCOPE = 'राशिफल (Horoscope)',
    DAILY_HOROSCOPE = 'दैनिक राशिफल (Daily Horoscope)',
    ZODIAC = 'राशि (Zodiac)',
    TEXT_TO_IMAGE = 'लेख से चित्र (Text to Image)',
    PILGRIMAGE = 'तीर्थयात्रा (Pilgrimage)',
    TRAVEL = 'यात्रा (Travel)',
    TRAIN_JOURNEY = 'ट्रेन यात्रा (Train Journey)',
    MOLE = 'तिल ज्योतिष (Mole Astrology)',
    LOVE_RELATIONSHIP = 'प्रेम संबंध (Love Relationship)',
    SEASONAL_FOOD = 'मौसमी भोजन (Seasonal Food)',
    ANG_SPHURAN = 'अंग स्फुरण (Body Twitching)',
    SNEEZING = 'छींक (Sneezing)',
    FOOD_COMBINATION = 'भोजन संयोजन (Food Combination)',
    RELIGIOUS_RITUALS = 'धार्मिक अनुष्ठान (Religious Rituals)',
    PRASHNA_PARIKSHA = 'प्रश्न परीक्षा (Prashna Pariksha)',
    FAMOUS_PLACE_TRAVEL = 'प्रसिद्ध स्थान (Famous Place Travel)',
    ENGLISH_GURU = 'अंग्रेजी गुरु (English Guru)',
    SCAN_TRANSLATE = 'अनुवाद (Scan & Translate)',
    VASTU_SHASTRA = 'वास्तु शास्त्र (Vastu Shastra)',
    TIME_MANAGEMENT = 'समय प्रबंधन (Time Management)',
    LOCAL_EXPERTS = 'स्थानीय विशेषज्ञ (Local Experts)',
    HTML_GENERATOR = 'HTML जनरेटर (HTML Generator)',
    LIVE_ASTROLOGER = 'लाइव ज्योतिषी (Live Astrologer)',
}

export type ProductCategory = 
    | 'Pujan Samagri' 
    | 'Tantra Mantra Yantra E-book' 
    | 'Gems & Jewelry' 
    | 'Mobile Accessories' 
    | 'Shoes' 
    | 'Accessories' 
    | 'Computer Course' 
    | 'Mobile Repairing Course'
    | 'Skill Learning'
    | 'Business Motivation'
    | 'Audio Story';

export type ProductType = 'PHYSICAL' | 'DIGITAL';

export interface Product {
    id: string;
    name: string;
    description: string;
    mrp: number;
    discountPercentage: number;
    colors: string[];
    sizes?: string[];
    imageUrl1: string;
    imageUrl2?: string;
    category: ProductCategory;
    productType: ProductType;
    reviewVideoUrl?: string;
    googleDriveLink?: string;
    isTrending?: boolean;
    isDeleted?: boolean; 
    isHidden?: boolean;
    isHardDeleted?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
    selectedColor: string;
    selectedSize?: string;
    downloadCount?: number;
}

export interface Order {
    id: string;
    items: CartItem[];
    customer: any;
    total: number;
    date: string;
    status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Verification Pending' | 'Completed' | 'Payment Pending' | 'Cancelled' | 'Refunded';
    paymentMethod: 'PREPAID' | 'COD';
    paymentStatus: 'PENDING' | 'VERIFICATION_PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
    trackingId?: string;
    carrier?: string;
    screenshotDataUrl?: string;
    transactionId?: string;
}

export interface Notification {
    id: string;
    icon: string;
    title: string;
    message: string;
    timestamp: string;
    read: boolean;
}

export interface SubscriptionPlan {
    name: string;
    price: number;
    durationDays: number;
    description: string;
    badge?: string;
    downloadLimit?: number; 
}
