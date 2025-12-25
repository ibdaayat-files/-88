
import { Shortcut } from './types';

export const SHORTCUTS: Shortcut[] = [
  // Windows
  { id: '1', keys: ['Win', 'D'], description: 'إظهار سطح المكتب', category: 'Windows', importance: 'high' },
  { id: '2', keys: ['Win', 'L'], description: 'قفل الكمبيوتر', category: 'Windows', importance: 'high' },
  { id: '3', keys: ['Win', 'E'], description: 'فتح مستكشف الملفات', category: 'Windows', importance: 'medium' },
  { id: '4', keys: ['Alt', 'Tab'], description: 'التنقل بين التطبيقات المفتوحة', category: 'Windows', importance: 'high' },
  { id: '5', keys: ['Win', 'V'], description: 'فتح سجل الحافظة (Clipboard History)', category: 'Windows', importance: 'medium' },
  { id: '6', keys: ['Ctrl', 'Shift', 'Esc'], description: 'فتح مدير المهام مباشرة', category: 'Windows', importance: 'high' },
  
  // macOS
  { id: '7', keys: ['Cmd', 'Space'], description: 'فتح البحث (Spotlight)', category: 'macOS', importance: 'high' },
  { id: '8', keys: ['Cmd', 'Option', 'Esc'], description: 'إغلاق البرامج بالقوة', category: 'macOS', importance: 'high' },
  { id: '9', keys: ['Cmd', 'Shift', '4'], description: 'تصوير جزء معين من الشاشة', category: 'macOS', importance: 'medium' },
  { id: '10', keys: ['Cmd', 'W'], description: 'إغلاق النافذة النشطة', category: 'macOS', importance: 'medium' },
  
  // Browser
  { id: '11', keys: ['Ctrl', 'T'], description: 'فتح تبويب جديد', category: 'Browser', importance: 'high' },
  { id: '12', keys: ['Ctrl', 'Shift', 'T'], description: 'إعادة فتح آخر تبويب تم إغلاقه', category: 'Browser', importance: 'high' },
  { id: '13', keys: ['Ctrl', 'L'], description: 'تحديد شريط العنوان فوراً', category: 'Browser', importance: 'medium' },
  { id: '14', keys: ['Ctrl', 'F'], description: 'البحث عن نص في الصفحة', category: 'Browser', importance: 'high' },
  
  // VS Code
  { id: '15', keys: ['Ctrl', 'P'], description: 'فتح ملف بسرعة', category: 'VSCode', importance: 'high' },
  { id: '16', keys: ['Ctrl', 'B'], description: 'إخفاء أو إظهار الشريط الجانبي', category: 'VSCode', importance: 'medium' },
  { id: '17', keys: ['Alt', 'Up/Down'], description: 'تحريك السطر المختار للأعلى أو الأسفل', category: 'VSCode', importance: 'medium' },
  { id: '18', keys: ['Ctrl', 'Shift', 'P'], description: 'فتح لوحة الأوامر (Command Palette)', category: 'VSCode', importance: 'high' },

  // General
  { id: '19', keys: ['Ctrl', 'C'], description: 'نسخ المحتوى المختار', category: 'General', importance: 'high' },
  { id: '20', keys: ['Ctrl', 'V'], description: 'لصق المحتوى المختار', category: 'General', importance: 'high' },
  { id: '21', keys: ['Ctrl', 'Z'], description: 'التراجع عن آخر عملية', category: 'General', importance: 'high' },
  { id: '22', keys: ['Ctrl', 'A'], description: 'تحديد كل شيء', category: 'General', importance: 'high' },
];

export const CATEGORIES = ['الكل', 'Windows', 'macOS', 'Browser', 'VSCode', 'General'];
