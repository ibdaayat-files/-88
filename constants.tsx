
import { Shortcut } from './types';

export const SHORTCUTS: Shortcut[] = [
  // Windows
  { id: '1', keys: ['Win', 'D'], description: 'إظهار أو إخفاء سطح المكتب', category: 'Windows', importance: 'high' },
  { id: '2', keys: ['Win', 'L'], description: 'قفل شاشة الكمبيوتر فوراً لحماية خصوصيتك', category: 'Windows', importance: 'high' },
  { id: '3', keys: ['Win', 'E'], description: 'فتح مستكشف الملفات (File Explorer) للوصول السريع للمجلدات', category: 'Windows', importance: 'medium' },
  { id: '4', keys: ['Alt', 'Tab'], description: 'التبديل السريع بين كافة النوافذ والتطبيقات المفتوحة', category: 'Windows', importance: 'high' },
  { id: '5', keys: ['Win', 'V'], description: 'عرض سجل الحافظة (Clipboard) للوصول للنصوص المنسوخة سابقاً', category: 'Windows', importance: 'medium' },
  { id: '6', keys: ['Ctrl', 'Shift', 'Esc'], description: 'فتح مدير المهام (Task Manager) لمراقبة أداء الجهاز وإغلاق البرامج', category: 'Windows', importance: 'high' },
  { id: 'w1', keys: ['Win', 'Shift', 'S'], description: 'أداة قص الشاشة (Screenshot) وتصوير جزء محدد', category: 'Windows', importance: 'high' },
  { id: 'w2', keys: ['Win', 'I'], description: 'فتح إعدادات النظام مباشرة', category: 'Windows', importance: 'medium' },
  
  // macOS
  { id: '7', keys: ['Cmd', 'Space'], description: 'تفعيل محرك البحث العالمي Spotlight للبحث عن الملفات والتطبيقات', category: 'macOS', importance: 'high' },
  { id: '8', keys: ['Cmd', 'Option', 'Esc'], description: 'فتح قائمة "إغلاق البرامج بالقوة" في حال تجمد أحد التطبيقات', category: 'macOS', importance: 'high' },
  { id: '9', keys: ['Cmd', 'Shift', '4'], description: 'تصوير جزء معين من الشاشة وحفظه كملف صورة', category: 'macOS', importance: 'medium' },
  { id: '10', keys: ['Cmd', 'W'], description: 'إغلاق التبويب أو النافذة النشطة حالياً', category: 'macOS', importance: 'medium' },
  { id: 'm1', keys: ['Cmd', 'Q'], description: 'الخروج التام من التطبيق النشط', category: 'macOS', importance: 'high' },
  { id: 'm2', keys: ['Cmd', ','], description: 'فتح إعدادات (Preferences) التطبيق النشط', category: 'macOS', importance: 'medium' },
  
  // Browser
  { id: '11', keys: ['Ctrl', 'T'], description: 'فتح تبويب جديد في المتصفح', category: 'Browser', importance: 'high' },
  { id: '12', keys: ['Ctrl', 'Shift', 'T'], description: 'استعادة آخر تبويب قمت بإغلاقه عن طريق الخطأ', category: 'Browser', importance: 'high' },
  { id: '13', keys: ['Ctrl', 'L'], description: 'التركيز على شريط العنوان لكتابة رابط جديد مباشرة', category: 'Browser', importance: 'medium' },
  { id: '14', keys: ['Ctrl', 'F'], description: 'البحث عن كلمة أو جملة محددة داخل الصفحة الحالية', category: 'Browser', importance: 'high' },
  { id: 'b1', keys: ['Ctrl', 'R'], description: 'إعادة تحميل الصفحة الحالية (Refresh)', category: 'Browser', importance: 'high' },
  { id: 'b2', keys: ['Ctrl', 'Shift', 'Del'], description: 'فتح قائمة مسح بيانات المتصفح (Clear History)', category: 'Browser', importance: 'medium' },
  
  // VS Code
  { id: '15', keys: ['Ctrl', 'P'], description: 'البحث السريع عن الملفات وفتحها داخل المشروع', category: 'VSCode', importance: 'high' },
  { id: '16', keys: ['Ctrl', 'B'], description: 'طي أو إظهار الشريط الجانبي لتوسيع مساحة العمل', category: 'VSCode', importance: 'medium' },
  { id: '17', keys: ['Alt', 'Up/Down'], description: 'نقل السطر الحالي للأعلى أو للأسفل بسهولة', category: 'VSCode', importance: 'medium' },
  { id: '18', keys: ['Ctrl', 'Shift', 'P'], description: 'فتح لوحة الأوامر للوصول لكافة خصائص المحرر', category: 'VSCode', importance: 'high' },
  { id: 'v1', keys: ['Ctrl', '/'], description: 'إضافة أو إزالة تعليق (Comment) للسطر المختار', category: 'VSCode', importance: 'high' },
  { id: 'v2', keys: ['Ctrl', 'D'], description: 'تحديد الكلمة التالية المطابقة للكلمة الحالية', category: 'VSCode', importance: 'medium' },

  // General
  { id: '19', keys: ['Ctrl', 'C'], description: 'نسخ العنصر أو النص المختار إلى الحافظة', category: 'General', importance: 'high' },
  { id: '20', keys: ['Ctrl', 'V'], description: 'لصق المحتوى الموجود في الحافظة', category: 'General', importance: 'high' },
  { id: '21', keys: ['Ctrl', 'Z'], description: 'التراجع عن الإجراء الأخير', category: 'General', importance: 'high' },
  { id: '22', keys: ['Ctrl', 'A'], description: 'تحديد كافة العناصر أو النصوص في الصفحة', category: 'General', importance: 'high' },
  { id: 'g1', keys: ['Ctrl', 'S'], description: 'حفظ العمل الحالي (Save)', category: 'General', importance: 'high' },
  { id: 'g2', keys: ['Alt', 'F4'], description: 'إغلاق البرنامج الحالي أو إيقاف تشغيل الجهاز', category: 'General', importance: 'high' },
];

export const CATEGORIES = ['الكل', 'Windows', 'macOS', 'Browser', 'VSCode', 'General'];
