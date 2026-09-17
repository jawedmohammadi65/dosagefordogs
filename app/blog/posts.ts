export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "link"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  relatedMedicineIds: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  sources: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-often-can-i-give-my-dog-benadryl",
    title: "How Often Can I Give My Dog Benadryl?",
    metaTitle: "How Often Can I Give My Dog Benadryl? Safe Dosing Schedule",
    metaDescription:
      "Learn how often you can safely give your dog Benadryl (diphenhydramine). Includes dosing schedule, weight chart, maximum daily dose, and when to call your vet.",
    excerpt:
      "Benadryl is one of the most common over-the-counter antihistamines given to dogs, but how often is it safe? Here's what you need to know before giving your dog another dose.",
    category: "Medication Guide",
    readTime: "6 min read",
    relatedMedicineIds: ["benadryl", "zyrtec"],
    sections: [
      {
        type: "paragraph",
        text: "Benadryl (diphenhydramine) is one of the most commonly used over-the-counter medications in dogs. Dog owners frequently reach for it during allergy season, after an insect bite, or before a stressful car ride. But one of the most common questions veterinarians hear is: how often can I actually give it?",
      },
      {
        type: "paragraph",
        text: "The short answer is that Benadryl is typically given every 8 to 12 hours — which works out to two or three doses per day. However, the exact schedule depends on your dog's weight, the reason you are giving it, and your veterinarian's specific recommendation.",
      },
      {
        type: "heading",
        text: "The Standard Benadryl Dosing Schedule for Dogs",
      },
      {
        type: "paragraph",
        text: "The widely accepted dosing guideline for Benadryl in dogs is 1 to 2 mg per pound of body weight, given every 8 to 12 hours. This means a 25-pound dog would typically receive 25 to 50 mg per dose, while a 50-pound dog would receive 50 to 100 mg per dose. Most veterinarians recommend not exceeding three doses in a 24-hour period.",
      },
      {
        type: "list",
        items: [
          "Small dogs (under 15 lb): 15–30 mg per dose, every 8–12 hours",
          "Medium dogs (15–40 lb): 15–80 mg per dose, every 8–12 hours",
          "Large dogs (40–80 lb): 40–160 mg per dose, every 8–12 hours",
          "Extra large dogs (over 80 lb): 80–160 mg per dose, every 8–12 hours",
        ],
      },
      {
        type: "callout",
        text: "Never give more than 3 doses in a 24-hour period without veterinary guidance. The maximum daily dose should not exceed 2 mg per pound per dose.",
      },
      {
        type: "heading",
        text: "Why Benadryl Lasts 8 to 12 Hours",
      },
      {
        type: "paragraph",
        text: "Benadryl begins working within 30 to 60 minutes after being given orally, and its effects typically last between 8 and 12 hours. This is why it is usually dosed two or three times per day. The exact duration can vary depending on your dog's size, metabolism, and overall health. Smaller dogs often process the medication more quickly, while larger dogs may feel the effects longer.",
      },
      {
        type: "paragraph",
        text: "Because Benadryl is processed by the liver and excreted through the kidneys, dogs with liver or kidney disease may need a reduced dose or an entirely different medication. If your dog has any underlying health condition, always confirm the dose and frequency with your veterinarian before starting Benadryl.",
      },
      {
        type: "heading",
        text: "When to Give Benadryl More or Less Often",
      },
      {
        type: "paragraph",
        text: "The frequency may change depending on the situation. For acute allergic reactions like a bee sting or hives, a veterinarian may recommend giving Benadryl immediately and then repeating every 8 to 12 hours until symptoms subside. For motion sickness, it is typically given 30 to 60 minutes before travel. For ongoing environmental allergies, a veterinarian might recommend a regular twice-daily schedule.",
      },
      {
        type: "heading",
        text: "What Happens If You Give Too Much",
      },
      {
        type: "paragraph",
        text: "Signs of Benadryl overdose in dogs include severe drowsiness, tremors, rapid heartbeat, disorientation, and in serious cases, seizures. If you suspect your dog has received too much Benadryl, contact your veterinarian or an emergency veterinary clinic immediately. Do not wait for symptoms to worsen.",
      },
      {
        type: "heading",
        text: "When to Call Your Veterinarian",
      },
      {
        type: "list",
        items: [
          "Your dog's symptoms don't improve within 24 hours",
          "Your dog becomes excessively drowsy or difficult to wake",
          "Your dog has a known medical condition (heart disease, glaucoma, seizures)",
          "Your dog is pregnant, nursing, or under 8 weeks old",
          "You accidentally gave more than the recommended dose",
        ],
      },
      {
        type: "heading",
        text: "Before You Give Another Dose",
      },
      {
        type: "paragraph",
        text: "The safest approach is always to confirm with your veterinarian, especially if this is the first time you're giving Benadryl to your dog or if your dog has any health conditions. Use our Benadryl dosage calculator to get a personalized estimate based on your dog's weight.",
      },
      {
        type: "link",
        text: "Use our",
        href: "/benadryl",
        label: "Benadryl Dosage Calculator for Dogs",
      },
    ],
    faqs: [
      {
        q: "How often can I give my dog Benadryl?",
        a: "Every 8 to 12 hours, up to three doses per day. Do not exceed the maximum dose recommended by your veterinarian.",
      },
      {
        q: "Can I give my dog Benadryl every 6 hours?",
        a: "Only if your veterinarian specifically recommends it. The standard schedule is every 8 to 12 hours.",
      },
      {
        q: "What is the maximum Benadryl dose for dogs?",
        a: "Generally 2 mg per pound per dose, not exceeding 3 doses in 24 hours without veterinary guidance.",
      },
      {
        q: "Can I give my dog Benadryl daily?",
        a: "Only under veterinary supervision. Long-term use may be fine for some dogs but requires a vet's approval.",
      },
      {
        q: "Is it safe to give Benadryl at night?",
        a: "Yes, and it is often given at night because drowsiness can help dogs rest. Confirm with your vet.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "is-human-benadryl-safe-for-dogs",
    title: "Is Human Benadryl Safe for Dogs?",
    metaTitle: "Is Human Benadryl Safe for Dogs? What Every Owner Should Know",
    metaDescription:
      "Can you give your dog human Benadryl? Learn which formulations are safe, which are toxic, and how to choose the right product without risking your dog's health.",
    excerpt:
      "Human Benadryl is commonly given to dogs — but not all Benadryl products are safe. Here's how to tell the difference and avoid a dangerous mistake.",
    category: "Safety Guide",
    readTime: "5 min read",
    relatedMedicineIds: ["benadryl", "zyrtec"],
    sections: [
      {
        type: "paragraph",
        text: "One of the most common questions dog owners ask is whether it's safe to give their dog the same Benadryl they have in their medicine cabinet. The honest answer is: sometimes yes, sometimes no. It depends entirely on which Benadryl product you're holding.",
      },
      {
        type: "heading",
        text: "Plain Benadryl vs. Combination Products",
      },
      {
        type: "paragraph",
        text: "Plain Benadryl contains only one active ingredient: diphenhydramine. This form is the same one veterinarians use, and it is generally safe for dogs when given at the correct dose. The problem is that many Benadryl products on store shelves are not plain diphenhydramine — they are combination products designed for human cold and allergy symptoms.",
      },
      {
        type: "list",
        items: [
          "Benadryl (plain): Safe — contains only diphenhydramine",
          "Benadryl-D: Unsafe — contains pseudoephedrine, which is toxic to dogs",
          "Benadryl-DM: Unsafe — contains dextromethorphan and other additives",
          "Benadryl Allergy Plus Congestion: Unsafe — contains phenylephrine",
          "Benadryl Itch Stopping: Unsafe — contains zinc acetate and other additives",
        ],
      },
      {
        type: "callout",
        text: "Always read the label. If the 'Active Ingredients' section lists anything other than diphenhydramine, do not give it to your dog.",
      },
      {
        type: "heading",
        text: "Why Combination Products Are Dangerous",
      },
      {
        type: "paragraph",
        text: "Pseudoephedrine, the decongestant in Benadryl-D, is a stimulant that can cause dangerously high heart rate, tremors, seizures, and even death in dogs. Phenylephrine, another common decongestant, has similar risks. Dextromethorphan, found in many cough syrups, can cause sedation, agitation, and serotonin syndrome in dogs.",
      },
      {
        type: "paragraph",
        text: "Even small amounts of these additives can harm a dog because of their smaller body weight. A single Benadryl-D tablet, which is a normal dose for a human, could be life-threatening for a small dog.",
      },
      {
        type: "heading",
        text: "Liquid Benadryl — Read the Ingredients",
      },
      {
        type: "paragraph",
        text: "Liquid Benadryl is convenient but tricky. Many liquid formulations contain xylitol (a sweetener that is highly toxic to dogs) or alcohol. Both can cause serious problems. Only use liquid Benadryl if the label clearly shows it contains only diphenhydramine, water, and safe inactive ingredients — and confirm with your veterinarian first.",
      },
      {
        type: "heading",
        text: "How to Give Benadryl Safely",
      },
      {
        type: "list",
        items: [
          "Use only plain diphenhydramine tablets or capsules",
          "Confirm the dose based on your dog's weight",
          "Give with food to reduce stomach upset",
          "Never use sugar-free, alcohol-based, or 'D' formulations",
          "When in doubt, call your veterinarian before giving anything",
        ],
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Human Benadryl can be safe for dogs, but only if it is plain diphenhydramine and only if the dose is correct. If you're not 100% sure about the product in your cabinet, don't guess — call your veterinarian or use our Benadryl dosage calculator to estimate the dose, then confirm with your vet.",
      },
      {
        type: "link",
        text: "Calculate the right dose with our",
        href: "/benadryl",
        label: "Benadryl Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "Can I give my dog human Benadryl?",
        a: "Yes, but only if it contains plain diphenhydramine and no other active ingredients. Never use Benadryl-D or combination products.",
      },
      {
        q: "What Benadryl is toxic to dogs?",
        a: "Benadryl-D (pseudoephedrine), Benadryl-DM (dextromethorphan), and any product with acetaminophen, phenylephrine, or xylitol are toxic to dogs.",
      },
      {
        q: "Can I give my dog liquid Benadryl?",
        a: "Only if it contains no xylitol or alcohol. Liquid formulations vary widely, so always check the label.",
      },
      {
        q: "Is children's Benadryl safe for dogs?",
        a: "Children's Benadryl is often safe if it contains only diphenhydramine, but check for xylitol, which is common in children's formulations.",
      },
      {
        q: "How much Benadryl can I give my dog?",
        a: "1–2 mg per pound of body weight, every 8–12 hours. Always confirm with your vet.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "trazodone-vs-gabapentin-for-dogs",
    title: "Trazodone vs Gabapentin for Dogs: Which One Is Right?",
    metaTitle: "Trazodone vs Gabapentin for Dogs — Comparison Guide",
    metaDescription:
      "Compare trazodone and gabapentin for dogs. Learn the differences in uses, dosage, side effects, and when vets prescribe each — or both together.",
    excerpt:
      "Both trazodone and gabapentin are commonly prescribed for dogs — but they work very differently. Here's how to understand which one your dog may need.",
    category: "Comparison",
    readTime: "7 min read",
    relatedMedicineIds: ["trazodone", "gabapentin"],
    sections: [
      {
        type: "paragraph",
        text: "Trazodone and gabapentin are two of the most commonly prescribed medications in veterinary medicine. They are often mentioned together because both can be used for anxiety, sedation, and pain — but they are not interchangeable. Understanding the differences helps you have better conversations with your veterinarian.",
      },
      {
        type: "heading",
        text: "What is Trazodone?",
      },
      {
        type: "paragraph",
        text: "Trazodone is an antidepressant that works as a serotonin antagonist and reuptake inhibitor (SARI). In dogs, it is most commonly prescribed for anxiety — including situational anxiety like thunderstorms and fireworks, separation anxiety, and stress during vet visits or travel. It provides a calming effect without heavy sedation.",
      },
      {
        type: "heading",
        text: "What is Gabapentin?",
      },
      {
        type: "paragraph",
        text: "Gabapentin is an anticonvulsant that has become widely used in veterinary medicine for its pain-relieving properties. It is especially effective for neuropathic (nerve) pain and chronic pain. Because it also has mild sedative effects, vets sometimes use it for anxiety or pre-surgical calming.",
      },
      {
        type: "heading",
        text: "Key Differences at a Glance",
      },
      {
        type: "list",
        items: [
          "Primary use: Trazodone → anxiety; Gabapentin → pain (nerve/chronic)",
          "Secondary use: Trazodone → sedation; Gabapentin → anxiety and sedation",
          "Dosage: Trazodone 2–5 mg/kg; Gabapentin 5–10 mg/kg",
          "Frequency: Both typically dosed every 8–12 hours",
          "Onset: Both typically work within 1–2 hours",
          "Risk profile: Both are generally well-tolerated; both may cause drowsiness",
        ],
      },
      {
        type: "heading",
        text: "When Vets Prescribe Trazodone",
      },
      {
        type: "list",
        items: [
          "Dogs with thunderstorm or firework phobia",
          "Dogs with separation anxiety",
          "Pre-vet-visit or pre-grooming sedation",
          "Post-surgical restlessness",
          "Generalized anxiety (with behavioral therapy)",
        ],
      },
      {
        type: "heading",
        text: "When Vets Prescribe Gabapentin",
      },
      {
        type: "list",
        items: [
          "Arthritis and joint pain",
          "Intervertebral disc disease (IVDD)",
          "Post-surgical pain",
          "Neuropathic pain from nerve injury",
          "Adjunct therapy for seizures",
        ],
      },
      {
        type: "heading",
        text: "Can They Be Given Together?",
      },
      {
        type: "paragraph",
        text: "Yes, and it's actually quite common. Many veterinarians prescribe trazodone and gabapentin together for dogs that need both anxiety relief and pain management — for example, dogs recovering from surgery or dogs with chronic pain who also have anxiety. Because both have sedative effects, the combination requires veterinary supervision and careful dosing.",
      },
      {
        type: "callout",
        text: "Never combine trazodone and gabapentin without a veterinarian's approval. The combination can cause excessive sedation if dosed incorrectly.",
      },
      {
        type: "heading",
        text: "Side Effects to Watch For",
      },
      {
        type: "paragraph",
        text: "Both medications commonly cause drowsiness, and both can occasionally cause vomiting, diarrhea, or loss of coordination. Rare but serious side effects include serotonin syndrome (trazodone) and severe sedation (gabapentin). If you notice excessive drowsiness, difficulty waking, tremors, or behavioral changes, contact your vet.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Trazodone and gabapentin serve different but overlapping purposes. Your veterinarian will choose based on your dog's specific condition, health history, and symptoms. If your dog has both anxiety and pain, the combination may be the right choice — but only under professional guidance.",
      },
      {
        type: "link",
        text: "See our",
        href: "/trazodone",
        label: "Trazodone Dosage Calculator",
      },
      {
        type: "link",
        text: "And our",
        href: "/gabapentin",
        label: "Gabapentin Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "Is trazodone or gabapentin better for dog anxiety?",
        a: "Trazodone is usually the first choice for anxiety. Gabapentin is used more for pain but can also help with anxiety-related sedation.",
      },
      {
        q: "Can I give my dog trazodone and gabapentin together?",
        a: "Yes, but only under veterinary supervision. Vets commonly prescribe them together for anxiety plus pain.",
      },
      {
        q: "Which one is stronger?",
        a: "They work differently and are not directly comparable. Trazodone is primarily for anxiety; gabapentin is primarily for nerve pain.",
      },
      {
        q: "What are the side effects of combining them?",
        a: "Drowsiness, mild loss of coordination, and rarely excessive sedation. Report any unusual symptoms to your vet.",
      },
      {
        q: "Can I stop either medication suddenly?",
        a: "No, especially gabapentin. Both should be tapered under veterinary supervision.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "signs-of-pain-in-dogs",
    title: "Signs of Pain in Dogs: What Every Owner Should Know",
    metaTitle: "Signs of Pain in Dogs — How to Recognize and Respond",
    metaDescription:
      "Dogs hide pain instinctively. Learn the subtle signs of pain in dogs, from behavior changes to physical symptoms, and when to call your veterinarian.",
    excerpt:
      "Dogs are masters at hiding pain. Here are the subtle behavioral and physical signs that tell you your dog may be hurting — and what to do next.",
    category: "Dog Health",
    readTime: "7 min read",
    relatedMedicineIds: ["gabapentin", "carprofen", "meloxicam"],
    sections: [
      {
        type: "paragraph",
        text: "Dogs are wired to hide pain. In the wild, showing weakness could mean losing food, territory, or even life. Even in our living rooms, this instinct stays strong. That's why many dog owners miss the early signs of pain until the problem has gotten worse.",
      },
      {
        type: "paragraph",
        text: "Learning to recognize the subtle signs of pain helps you act early — and early action usually means better outcomes, less suffering, and often less expense.",
      },
      {
        type: "heading",
        text: "Behavioral Signs of Pain",
      },
      {
        type: "list",
        items: [
          "Reluctance to move or exercise",
          "Slowing down on walks or refusing stairs",
          "Restlessness or pacing at night",
          "Whining, crying, or groaning",
          "Hiding or avoiding family members",
          "Aggression when touched (especially in a specific area)",
          "Loss of interest in play or toys",
          "Changes in sleeping patterns",
        ],
      },
      {
        type: "heading",
        text: "Physical Signs of Pain",
      },
      {
        type: "list",
        items: [
          "Limping or favoring one leg",
          "Stiffness when getting up or lying down",
          "Trembling or shaking",
          "Excessive licking or chewing at a specific spot",
          "Labored or rapid breathing",
          "Loss of appetite",
          "Dilated pupils or a fixed stare",
          "Panting when not hot or exercised",
        ],
      },
      {
        type: "callout",
        text: "Trust your instincts. If you feel something is wrong with your dog, it usually is. Vets see this every day — owners often detect illness before physical symptoms appear.",
      },
      {
        type: "heading",
        text: "Common Causes of Pain in Dogs",
      },
      {
        type: "paragraph",
        text: "Pain in dogs usually has one of several underlying causes. Osteoarthritis and joint disease are the most common, especially in senior dogs and large breeds. Injuries, including sprains, strains, and fractures, cause acute pain. Dental disease is another frequent source — many dogs live with significant tooth pain for months without obvious signs. Other causes include intervertebral disc disease (IVDD), cancer, infections, and post-surgical pain.",
      },
      {
        type: "heading",
        text: "How Vets Treat Pain in Dogs",
      },
      {
        type: "paragraph",
        text: "Veterinary pain management often combines several medications. NSAIDs like carprofen and meloxicam reduce inflammation and are the backbone of arthritis pain management. Gabapentin is commonly added for nerve pain. In more severe cases, veterinarians may also use opioids under supervision.",
      },
      {
        type: "paragraph",
        text: "Never give human pain medications to your dog. Ibuprofen, acetaminophen (paracetamol), naproxen, and human aspirin are all toxic to dogs and can cause serious harm — even death — in small doses.",
      },
      {
        type: "heading",
        text: "When to Call Your Veterinarian",
      },
      {
        type: "list",
        items: [
          "You notice any of the signs above lasting more than 24 hours",
          "Your dog is limping, trembling, or refusing to move",
          "Your dog stops eating or drinking",
          "Your dog cries out when touched",
          "You suspect an injury or trauma",
        ],
      },
      {
        type: "heading",
        text: "Learn More",
      },
      {
        type: "paragraph",
        text: "If your vet prescribes pain medication, our dosage calculators can help you understand the typical weight-based dose. Always confirm exact dosing with your veterinarian.",
      },
      {
        type: "link",
        text: "See our",
        href: "/gabapentin",
        label: "Gabapentin Dosage Calculator",
      },
      {
        type: "link",
        text: "And our",
        href: "/carprofen",
        label: "Carprofen Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "How can I tell if my dog is in pain?",
        a: "Look for behavioral changes (hiding, aggression, restlessness) and physical signs (limping, trembling, panting, licking a specific spot).",
      },
      {
        q: "Do dogs cry when in pain?",
        a: "Sometimes, but many dogs suffer silently. Behavioral changes are often the only clue.",
      },
      {
        q: "What pain medication is safe for dogs?",
        a: "Vet-prescribed NSAIDs (carprofen, meloxicam), gabapentin, and in some cases opioids. Never give human pain medication.",
      },
      {
        q: "Can I give my dog human aspirin for pain?",
        a: "No, not without veterinary guidance. Human aspirin can cause stomach bleeding and kidney problems in dogs.",
      },
      {
        q: "How long can a dog live with untreated pain?",
        a: "Untreated pain severely affects quality of life and can shorten lifespan. Always seek veterinary care.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "dog-anxiety-symptoms-and-treatment",
    title: "Dog Anxiety Symptoms and Treatment Options",
    metaTitle: "Dog Anxiety Symptoms & Treatment — Complete Owner Guide",
    metaDescription:
      "Learn to recognize dog anxiety symptoms and explore treatment options including behavioral therapy, trazodone, gabapentin, and other vet-prescribed medications.",
    excerpt:
      "Anxiety is one of the most common behavioral issues in dogs. Here's how to recognize the signs and what treatment options are available.",
    category: "Behavior",
    readTime: "7 min read",
    relatedMedicineIds: ["trazodone", "gabapentin"],
    sections: [
      {
        type: "paragraph",
        text: "Anxiety affects millions of dogs. It can range from mild nervousness during thunderstorms to severe separation anxiety that leaves dogs panicked and destructive. Recognizing the symptoms early is the first step toward helping your dog live a calmer, happier life.",
      },
      {
        type: "heading",
        text: "Common Types of Anxiety in Dogs",
      },
      {
        type: "list",
        items: [
          "Separation anxiety — distress when left alone",
          "Noise anxiety — fear of thunderstorms, fireworks, loud sounds",
          "Travel anxiety — stress during car rides or flights",
          "Social anxiety — fear of strangers, other dogs, or new environments",
          "Situational anxiety — vet visits, grooming, moving homes",
        ],
      },
      {
        type: "heading",
        text: "Symptoms of Dog Anxiety",
      },
      {
        type: "list",
        items: [
          "Excessive barking, whining, or howling",
          "Pacing, restlessness, or inability to settle",
          "Destructive behavior (chewing, digging, scratching doors)",
          "House soiling when left alone",
          "Excessive drooling, panting, or trembling",
          "Loss of appetite",
          "Hiding or trying to escape",
          "Aggression when approached during anxious moments",
        ],
      },
      {
        type: "callout",
        text: "Anxiety is a medical condition, not a behavioral flaw. Punishing an anxious dog makes the problem worse. Seek veterinary guidance.",
      },
      {
        type: "heading",
        text: "Behavioral Treatment",
      },
      {
        type: "paragraph",
        text: "Behavioral therapy is the foundation of anxiety treatment. This includes counterconditioning (pairing the trigger with something positive), desensitization (gradual exposure at low intensity), and enrichment (exercise, puzzle toys, structured routines). For serious cases, working with a veterinary behaviorist produces the best results.",
      },
      {
        type: "heading",
        text: "Medication Options",
      },
      {
        type: "paragraph",
        text: "When behavioral therapy alone isn't enough, veterinarians may prescribe medication. Trazodone is often used for situational anxiety and general calming. Gabapentin is sometimes used for its mild sedative effects and for pain-related anxiety. For long-term management, vets may prescribe SSRIs like fluoxetine. Every medication has specific indications, side effects, and dosing — never give any without a prescription.",
      },
      {
        type: "heading",
        text: "Natural and Supportive Approaches",
      },
      {
        type: "list",
        items: [
          "Regular exercise — tired dogs are calmer dogs",
          "Calming supplements (L-theanine, chamomile) — ask your vet first",
          "Pheromone diffusers (Adaptil)",
          "Thunder shirts or anxiety wraps",
          "Calming music or white noise",
          "Consistent daily routine",
        ],
      },
      {
        type: "heading",
        text: "When to See a Veterinarian",
      },
      {
        type: "list",
        items: [
          "Your dog's anxiety is affecting daily life",
          "Your dog is destructive or self-harming",
          "Behavioral therapy alone isn't helping",
          "You're considering medication for your dog",
        ],
      },
      {
        type: "heading",
        text: "Learn More",
      },
      {
        type: "link",
        text: "See our",
        href: "/trazodone",
        label: "Trazodone Dosage Calculator",
      },
      {
        type: "link",
        text: "And our",
        href: "/gabapentin",
        label: "Gabapentin Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "How do I know if my dog has anxiety?",
        a: "Look for excessive barking, pacing, destructive behavior, drooling, hiding, or loss of appetite — especially during specific triggers.",
      },
      {
        q: "What medication is used for dog anxiety?",
        a: "Trazodone, gabapentin, and SSRIs like fluoxetine are commonly prescribed. Never give without a vet's approval.",
      },
      {
        q: "Is trazodone safe for dogs?",
        a: "Yes, when prescribed and dosed correctly by a veterinarian. It is one of the most commonly used anti-anxiety medications in dogs.",
      },
      {
        q: "Can anxiety in dogs be cured?",
        a: "It can often be managed effectively with behavioral therapy, environmental changes, and sometimes medication.",
      },
      {
        q: "Do calming chews work for dogs?",
        a: "Some dogs respond to L-theanine, chamomile, or valerian root. Effects vary, and they should not replace veterinary care for serious anxiety.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "nsaids-for-dogs-safety-guide",
    title: "NSAIDs for Dogs: A Complete Safety Guide",
    metaTitle: "NSAIDs for Dogs — Safety Guide, Side Effects & Warnings",
    metaDescription:
      "Complete guide to NSAIDs for dogs including carprofen and meloxicam. Learn how they work, side effects, warnings, and how to use them safely.",
    excerpt:
      "NSAIDs are among the most prescribed medications for dogs — but they come with real risks. Here's how to use them safely.",
    category: "Medication Guide",
    readTime: "6 min read",
    relatedMedicineIds: ["carprofen", "meloxicam"],
    sections: [
      {
        type: "paragraph",
        text: "Nonsteroidal anti-inflammatory drugs (NSAIDs) are the backbone of pain management in veterinary medicine. They reduce pain, inflammation, and fever by blocking the enzymes that produce prostaglandins. For dogs with arthritis, post-surgical pain, or injuries, NSAIDs can dramatically improve quality of life.",
      },
      {
        type: "paragraph",
        text: "But NSAIDs are not without risk. Used incorrectly — or combined with the wrong medications — they can cause serious stomach, liver, and kidney damage. Understanding how to use them safely is essential.",
      },
      {
        type: "heading",
        text: "Common NSAIDs for Dogs",
      },
      {
        type: "list",
        items: [
          "Carprofen (Rimadyl, Novox, Vetprofen)",
          "Meloxicam (Metacam, Loxicom, Rheumocam)",
          "Deracoxib (Deramaxx)",
          "Firocoxib (Previcox)",
          "Grapiprant (Galliprant) — newer, gentler option",
        ],
      },
      {
        type: "heading",
        text: "What NSAIDs Are Used For",
      },
      {
        type: "list",
        items: [
          "Osteoarthritis and joint pain",
          "Post-surgical pain and inflammation",
          "Soft tissue injuries",
          "Dental pain (short-term)",
          "Chronic pain management (with monitoring)",
        ],
      },
      {
        type: "heading",
        text: "Important Safety Rules",
      },
      {
        type: "list",
        items: [
          "Never give human NSAIDs (ibuprofen, naproxen) to dogs",
          "Never combine two NSAIDs",
          "Never combine NSAIDs with steroids (prednisone)",
          "Always give NSAIDs with food",
          "Use only under veterinary supervision with regular blood tests",
        ],
      },
      {
        type: "callout",
        text: "Human NSAIDs like ibuprofen and naproxen can be fatal to dogs even in small doses. Never give them to your dog.",
      },
      {
        type: "heading",
        text: "Side Effects to Watch For",
      },
      {
        type: "list",
        items: [
          "Vomiting or diarrhea",
          "Loss of appetite",
          "Lethargy or weakness",
          "Black or tarry stools (sign of stomach bleeding)",
          "Yellowing of gums, eyes, or skin (liver problem)",
          "Increased thirst or urination (kidney problem)",
        ],
      },
      {
        type: "heading",
        text: "Monitoring During NSAID Use",
      },
      {
        type: "paragraph",
        text: "Dogs on long-term NSAIDs should have regular blood tests to check liver and kidney function. Your veterinarian may recommend testing every 6 to 12 months. Always report any new symptoms immediately — early detection of problems leads to better outcomes.",
      },
      {
        type: "heading",
        text: "Alternatives to NSAIDs",
      },
      {
        type: "paragraph",
        text: "For dogs who cannot tolerate NSAIDs, veterinarians may prescribe gabapentin (for nerve pain), amantadine, or newer options like grapiprant. Combination therapy is often more effective and safer than high-dose single medications.",
      },
      {
        type: "heading",
        text: "Learn More",
      },
      {
        type: "link",
        text: "See our",
        href: "/carprofen",
        label: "Carprofen Dosage Calculator",
      },
      {
        type: "link",
        text: "And our",
        href: "/meloxicam",
        label: "Meloxicam Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "Are NSAIDs safe for dogs?",
        a: "Yes, when prescribed and monitored by a veterinarian. They are among the most commonly prescribed pain medications in veterinary medicine.",
      },
      {
        q: "Can I give my dog ibuprofen?",
        a: "No. Ibuprofen (Advil, Motrin) is toxic to dogs and can cause stomach ulcers, kidney failure, and death.",
      },
      {
        q: "What are the side effects of NSAIDs in dogs?",
        a: "Vomiting, diarrhea, appetite loss, and rarely stomach ulcers, liver, or kidney problems. Regular monitoring helps prevent serious issues.",
      },
      {
        q: "Can NSAIDs be used long-term?",
        a: "Yes, under veterinary supervision with regular blood tests.",
      },
      {
        q: "What's the safest NSAID for dogs?",
        a: "There is no single 'safest' — it depends on your dog's health. Grapiprant is a newer option with a different mechanism and lower GI risk.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "how-to-give-pills-to-a-dog",
    title: "How to Give Pills to a Dog: 10 Tips That Actually Work",
    metaTitle: "How to Give Pills to a Dog — 10 Proven Tips",
    metaDescription:
      "Struggling to give your dog a pill? Learn 10 safe, effective techniques for giving dogs medication — including pill pockets, peanut butter, and the right way to use a pill popper.",
    excerpt:
      "Giving a dog a pill can feel like a wrestling match. These 10 tried-and-true techniques make it easier — for both of you.",
    category: "Practical Tips",
    readTime: "5 min read",
    relatedMedicineIds: ["benadryl", "trazodone", "gabapentin"],
    sections: [
      {
        type: "paragraph",
        text: "If you've ever tried to give a reluctant dog a pill, you know the struggle. They spit, they hide, they somehow find the pill in a pile of treats and eat everything except it. The good news: with the right technique, giving medication can be quick and low-stress for both of you.",
      },
      {
        type: "heading",
        text: "1. Use a Pill Pocket or Soft Treat",
      },
      {
        type: "paragraph",
        text: "Pill pockets are soft, moldable treats designed to hide tablets. You wrap the pill inside and give it as a treat. This works for most dogs because the pill is completely hidden. If your dog is suspicious, try squeezing the pocket closed and giving it with a couple of plain treats first.",
      },
      {
        type: "heading",
        text: "2. Hide in Peanut Butter (Check for Xylitol!)",
      },
      {
        type: "paragraph",
        text: "Peanut butter is a classic pill hider — but always check the label for xylitol, a sweetener that is highly toxic to dogs. Many 'natural' or 'sugar-free' peanut butters contain xylitol. Use plain peanut butter only.",
      },
      {
        type: "heading",
        text: "3. Use Cheese or Lunch Meat",
      },
      {
        type: "paragraph",
        text: "A small piece of cheese, chicken, or deli meat can hide most pills. Wrap the pill tightly and give it as a special treat. Use only a small amount to avoid upsetting your dog's stomach.",
      },
      {
        type: "heading",
        text: "4. Try a Pill Popper",
      },
      {
        type: "paragraph",
        text: "A pill popper is a plastic device that lets you place the pill at the back of your dog's tongue without your fingers going into their mouth. It is especially useful for dogs who bite or resist handling.",
      },
      {
        type: "heading",
        text: "5. Crush and Mix (Only if Vet Approves)",
      },
      {
        type: "paragraph",
        text: "Some pills can be crushed and mixed into wet food — but many cannot. Extended-release, enteric-coated, or bitter medications may be dangerous when crushed. Always ask your veterinarian before crushing any pill.",
      },
      {
        type: "heading",
        text: "6. The Two-Treat Trick",
      },
      {
        type: "paragraph",
        text: "Give your dog two plain treats first, then a treat with the pill, then another plain treat. This distracts them and creates a pattern so they don't suspect the medicated one.",
      },
      {
        type: "heading",
        text: "7. Stay Calm and Confident",
      },
      {
        type: "paragraph",
        text: "Dogs pick up on your energy. If you're nervous or frustrated, they will be too. Approach the task calmly and confidently. If you get stressed, take a break and try again in a few minutes.",
      },
      {
        type: "heading",
        text: "8. Never Force — Use Positive Reinforcement",
      },
      {
        type: "paragraph",
        text: "Forcing a pill down your dog's throat can cause choking, injury, or lasting fear. Always use positive reinforcement. Reward your dog immediately after they swallow the pill.",
      },
      {
        type: "heading",
        text: "9. Ask About Compounded Flavors",
      },
      {
        type: "paragraph",
        text: "Many medications can be compounded into flavored liquids, chewables, or transdermal gels by a veterinary pharmacy. If your dog is very difficult to pill, ask your vet about compounding options.",
      },
      {
        type: "heading",
        text: "10. Consider Pill Syringes for Liquids",
      },
      {
        type: "paragraph",
        text: "If your dog takes liquid medication, use a dosing syringe (usually provided by the pharmacy). Place it in the cheek pouch and dispense slowly, letting your dog swallow between squirts.",
      },
      {
        type: "callout",
        text: "Never crush, split, or hide a pill without knowing it is safe to do so. Ask your veterinarian or pharmacist first.",
      },
      {
        type: "heading",
        text: "Learn More",
      },
      {
        type: "link",
        text: "Calculate doses with our",
        href: "/benadryl",
        label: "Benadryl Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "What food can I hide a pill in for my dog?",
        a: "Peanut butter (no xylitol), cheese, chicken, deli meat, or commercial pill pockets. Always check the label for xylitol.",
      },
      {
        q: "Can I crush my dog's pill?",
        a: "Only if your veterinarian confirms it is safe. Many extended-release or coated pills should not be crushed.",
      },
      {
        q: "What if my dog spits out the pill?",
        a: "Try a different hiding method — pill pocket, cheese, or a pill popper. Never force the pill down.",
      },
      {
        q: "Is xylitol dangerous for dogs?",
        a: "Yes, extremely. Xylitol causes rapid insulin release and can be fatal. Always check labels.",
      },
      {
        q: "Can I put pills in my dog's water?",
        a: "Generally not recommended. Your dog may not drink enough to get the full dose, and some medications are not stable in water.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "American Veterinary Medical Association (AVMA)",
    ],
  },

  {
    slug: "dog-overdose-symptoms",
    title: "Dog Overdose Symptoms: When to Seek Emergency Help",
    metaTitle: "Dog Overdose Symptoms — Emergency Signs You Must Know",
    metaDescription:
      "Learn the signs of medication overdose in dogs and what to do immediately. Includes emergency contacts, symptoms by severity, and prevention tips.",
    excerpt:
      "Medication mistakes happen — but knowing the signs of an overdose can save your dog's life. Here's what to watch for and when to act.",
    category: "Emergency",
    readTime: "6 min read",
    relatedMedicineIds: ["benadryl", "trazodone", "gabapentin", "carprofen"],
    sections: [
      {
        type: "paragraph",
        text: "Even the most careful dog owner can make a mistake. A pill drops on the floor, a child shares food, or a dose gets miscalculated. Knowing the signs of an overdose — and what to do immediately — can make the difference between a close call and a tragedy.",
      },
      {
        type: "callout",
        text: "If you suspect an overdose, do not wait for symptoms. Call your veterinarian, an emergency vet, or a pet poison control hotline immediately.",
      },
      {
        type: "heading",
        text: "Emergency Contacts",
      },
      {
        type: "list",
        items: [
          "ASPCA Animal Poison Control: (888) 426-4435",
          "Pet Poison Helpline: (855) 764-7661",
          "Your veterinarian or nearest emergency vet clinic",
        ],
      },
      {
        type: "heading",
        text: "General Signs of Overdose",
      },
      {
        type: "list",
        items: [
          "Vomiting or diarrhea (sometimes with blood)",
          "Excessive drooling",
          "Extreme drowsiness or difficulty waking",
          "Tremors, shaking, or seizures",
          "Loss of coordination or stumbling",
          "Rapid or irregular heartbeat",
          "Difficulty breathing",
          "Pale, yellow, or blue gums",
          "Collapse or loss of consciousness",
        ],
      },
      {
        type: "heading",
        text: "Signs by Medication Type",
      },
      {
        type: "paragraph",
        text: "Different medications produce different overdose signs. Antihistamines like Benadryl cause severe drowsiness, tremors, and rapid heartbeat. Trazodone can cause serotonin syndrome with agitation, confusion, and hyperthermia. Gabapentin can cause profound sedation and loss of coordination. NSAIDs like carprofen and meloxicam can cause vomiting, black stools, and kidney problems.",
      },
      {
        type: "heading",
        text: "What to Do Immediately",
      },
      {
        type: "list",
        items: [
          "Stay calm — your dog needs you focused",
          "Call your vet or a poison control hotline right away",
          "Note what was ingested, how much, and when",
          "Keep the packaging or pill bottle nearby",
          "Do not induce vomiting unless instructed by a professional",
          "Do not give food, water, or home remedies without guidance",
        ],
      },
      {
        type: "heading",
        text: "What NOT to Do",
      },
      {
        type: "list",
        items: [
          "Do not wait for symptoms to appear",
          "Do not induce vomiting on your own",
          "Do not give milk, oil, or 'home antidotes'",
          "Do not give activated charcoal without veterinary guidance",
          "Do not assume 'a little' is harmless",
        ],
      },
      {
        type: "heading",
        text: "Prevention Tips",
      },
      {
        type: "list",
        items: [
          "Store all medications out of reach of pets and children",
          "Never leave pill bottles on counters or nightstands",
          "Count pills before and after dosing",
          "Use pill organizers with clear labels",
          "Keep a written record of all medications your dog takes",
        ],
      },
      {
        type: "heading",
        text: "Learn More",
      },
      {
        type: "paragraph",
        text: "Understanding correct dosages helps prevent accidental overdoses. Use our calculators to confirm typical doses for common medications.",
      },
      {
        type: "link",
        text: "See our",
        href: "/benadryl",
        label: "Benadryl Dosage Calculator",
      },
    ],
    faqs: [
      {
        q: "What are the first signs of overdose in dogs?",
        a: "Vomiting, excessive drooling, extreme drowsiness, tremors, and loss of coordination are common early signs. Do not wait — call your vet.",
      },
      {
        q: "How long after ingestion do symptoms appear?",
        a: "It varies by medication. Some cause symptoms within 30 minutes; others may take several hours.",
      },
      {
        q: "Should I make my dog vomit?",
        a: "Never induce vomiting unless a veterinarian or poison control tells you to. It can cause more harm than good.",
      },
      {
        q: "Is Benadryl overdose dangerous for dogs?",
        a: "Yes. Severe drowsiness, tremors, rapid heartbeat, and seizures can occur. Contact your vet immediately.",
      },
      {
        q: "How can I prevent an overdose?",
        a: "Store medications safely, count pills, keep records, and always confirm dosages with your vet.",
      },
    ],
    sources: [
      "ASPCA Animal Poison Control",
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "American Veterinary Medical Association (AVMA)",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}