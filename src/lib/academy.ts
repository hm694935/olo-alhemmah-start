export const contactEmail = 'hemmat@oloalhemmah.com';
export const individualPackages = [
  { name: 'بداية', price: 40, sessions: 8, duration: 30, description: 'خطوتك الأولى نحو تعلّم منتظم', featured: false },
  { name: 'تقدم', price: 72, sessions: 12, duration: 45, description: 'وقت أكبر للفهم والتطبيق', featured: true },
  { name: 'إتقان', price: 90, sessions: 16, duration: 45, description: 'مسار مكثّف لطموح أكبر', featured: false },
];
export const groupProgram = { meetings: 8, hours: 16, students: 8, egypt: [500, 650], jordan: [8, 12] };
export function subscriptionLink(program: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(`طلب اشتراك — ${program}`)}&body=${encodeURIComponent(`السلام عليكم،\nأرغب في معرفة تفاصيل الاشتراك في ${program}.\n\nالاسم:\nالعمر:\nالدولة:\nالمستوى الحالي:\nالمواعيد المناسبة:\n\nشكرًا لكم.`)}`;
}