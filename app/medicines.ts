export type FAQ = {
  q: string;
  a: string;
};

export type SafeUnsafe = {
  label: string;
  text: string;
};

export type Medicine = {
  id: string;
  name: string;
  generic: string;
  brand: string[];
  category: string;
  prescription: boolean;
  dosageMin: number;
  dosageMax: number;
  dosageUnit: string;
  frequency: string;
  maxDaily: number;
  calculatorTitle: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  howItWorks: string;
  howOften: string;
  safeUnsafe: SafeUnsafe[];
  whenToCallVet: string[];
  formulations: string[];
  uses: string[];
  sideEffects: string[];
  warnings: string[];
  quickAnswer: string;
  faqs: FAQ[];
  sources: string[];
};

export const medicines: Medicine[] = [
  {
    id: "benadryl",
    name: "Benadryl",
    generic: "Diphenhydramine",
    brand: ["Benadryl", "Banophen", "Unisom"],
    category: "Antihistamine",
    prescription: false,
    dosageMin: 1,
    dosageMax: 2,
    dosageUnit: "mg per lb",
    frequency: "Every 8–12 hours",
    maxDaily: 50,
    calculatorTitle: "Benadryl Dosage Calculator for Dogs",
    metaTitle:
      "Benadryl Dosage for Dogs — Calculator, Chart & Safe Guidelines",
    metaDescription:
      "Calculate the correct Benadryl (diphenhydramine) dosage for your dog by weight. Includes dosage chart, how often to give it, safe limits, side effects, and FAQs. Always confirm with your veterinarian.",
    overview: [
      "Benadryl, known generically as diphenhydramine, is one of the most commonly used over-the-counter antihistamines in veterinary medicine. Dog owners frequently reach for it when their pet develops itching, sneezing, hives, or a mild allergic reaction. It is also sometimes used to reduce motion sickness during car rides and to mildly sedate anxious dogs before stressful events such as thunderstorms or veterinary visits.",
      "Diphenhydramine works by blocking histamine receptors in the body. Histamine is the chemical your dog's immune system releases during an allergic reaction, which causes itching, swelling, and redness. By blocking these receptors, Benadryl reduces the intensity of the allergic response. It also crosses into the brain, which is why it often causes drowsiness and is sometimes used for its calming effect.",
      "While Benadryl is considered relatively safe for most healthy dogs when given at the correct dose, it is not appropriate for every dog. Dogs with certain medical conditions — such as glaucoma, heart disease, high blood pressure, or seizures — may not be good candidates. Puppies under eight weeks old, pregnant dogs, and nursing mothers should not receive Benadryl unless a veterinarian specifically recommends it.",
    ],
    howItWorks:
      "Benadryl begins working within 30 to 60 minutes after being given orally. The effects typically last between 8 and 12 hours, which is why the standard dosing schedule is every 8 to 12 hours. The exact duration varies depending on your dog's size, metabolism, and overall health. Benadryl is processed by the liver and excreted through the kidneys, so dogs with liver or kidney disease may need a reduced dose or an entirely different medication.",
    howOften:
      "The typical dosing schedule for Benadryl in dogs is every 8 to 12 hours, which usually works out to two or three doses per day. Most veterinarians recommend not exceeding three doses in a 24-hour period. The maximum daily dose depends on your dog's weight — for most dogs, vets recommend not exceeding 2 mg per pound per dose, and not more than 50 mg per dose for smaller dogs. Always follow the specific schedule your veterinarian provides.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Plain diphenhydramine tablets or liquid without any additional active ingredients. This is the same medication used in human Benadryl, provided it does not contain decongestants, pain relievers, or alcohol.",
      },
      {
        label: "Unsafe",
        text: "Any Benadryl product labeled 'D' or 'DM' (such as Benadryl-D), which contains pseudoephedrine or other decongestants that are highly toxic to dogs and can cause dangerously high heart rate, seizures, and even death.",
      },
      {
        label: "Unsafe",
        text: "Combination cold and flu products that mix diphenhydramine with acetaminophen, ibuprofen, or other pain relievers. These additional ingredients can cause severe liver or kidney damage in dogs.",
      },
      {
        label: "Unsafe",
        text: "Sugar-free or alcohol-containing liquid formulations. Many liquid Benadryl products contain xylitol (a sweetener toxic to dogs) or alcohol, both of which should be avoided.",
      },
    ],
    whenToCallVet: [
      "Your dog has ingested Benadryl-D or any combination product containing pseudoephedrine or acetaminophen.",
      "You accidentally gave your dog more than the recommended dose.",
      "Your dog shows signs of an overdose: severe drowsiness, tremors, rapid heartbeat, disorientation, or seizures.",
      "Your dog's allergic symptoms do not improve within 24 hours of starting Benadryl.",
      "Your dog has a known medical condition such as heart disease, glaucoma, or seizures, and you are considering giving Benadryl.",
      "Your dog is pregnant, nursing, or under eight weeks old.",
    ],
    formulations: [
      "25 mg tablet (most common)",
      "50 mg capsule",
      "Liquid 12.5 mg per 5 ml (children's formula)",
      "Chewable tablets for children (check for xylitol)",
    ],
    uses: [
      "Allergic reactions such as itching, hives, and swelling",
      "Mild insect bites and bee stings",
      "Motion sickness during car travel",
      "Mild anxiety and sedation before stressful events",
      "Itchy skin related to environmental allergies",
    ],
    sideEffects: [
      "Drowsiness and lethargy",
      "Dry mouth and dry nose",
      "Sedation (this is often the intended effect)",
      "Urinary retention (difficulty urinating)",
      "Rapid heartbeat in some dogs",
      "Rare: excitement or agitation instead of drowsiness",
    ],
    warnings: [
      "Never give Benadryl-D, Benadryl-DM, or any combination product containing pseudoephedrine — these are toxic to dogs.",
      "Avoid in pregnant or nursing dogs unless directed by a veterinarian.",
      "Use caution in dogs with glaucoma, heart disease, high blood pressure, or seizures.",
      "Do not combine with other sedatives, tranquilizers, or antihistamines without veterinary advice.",
      "Never give human liquid Benadryl that contains xylitol or alcohol.",
    ],
    quickAnswer:
      "The typical Benadryl dosage for dogs is 1–2 mg per pound of body weight, given every 8–12 hours. For example, a 25 lb dog would receive 25–50 mg per dose, and a 50 lb dog would receive 50–100 mg per dose. Always confirm with your veterinarian before giving Benadryl to your dog, especially if your dog has any underlying health conditions or is taking other medications.",
    faqs: [
      {
        q: "What is the dosage of Benadryl for dogs?",
        a: "The standard dosage is 1–2 mg per pound of body weight, given every 8–12 hours. A 25 lb dog typically receives 25–50 mg per dose, and a 50 lb dog receives 50–100 mg per dose.",
      },
      {
        q: "How often can I give Benadryl to my dog?",
        a: "Usually every 8 to 12 hours, which works out to two or three doses per day. Do not exceed the maximum daily dose recommended by your veterinarian.",
      },
      {
        q: "What dosage of Benadryl is safe for dogs?",
        a: "1–2 mg per pound is generally considered safe for healthy adult dogs. Never use combination products containing decongestants like pseudoephedrine, which are highly toxic to dogs.",
      },
      {
        q: "Can I give my dog human Benadryl?",
        a: "Yes, plain diphenhydramine (without other active ingredients) is the same as veterinary Benadryl. Always check the label carefully for other active ingredients.",
      },
      {
        q: "What if I give my dog too much Benadryl?",
        a: "Signs of overdose include severe drowsiness, tremors, rapid heartbeat, disorientation, and seizures. Contact your veterinarian or an emergency veterinary clinic immediately.",
      },
      {
        q: "Is Benadryl safe for puppies?",
        a: "Benadryl is not recommended for puppies under 8 weeks old. For older puppies, consult your veterinarian for an appropriate dose.",
      },
      {
        q: "How long does Benadryl take to work in dogs?",
        a: "Benadryl usually starts working within 30 to 60 minutes after being given, and effects last 8 to 12 hours.",
      },
      {
        q: "Can Benadryl be used for dog anxiety?",
        a: "Benadryl is sometimes used for mild sedation due to drowsiness, but it is not a proper anti-anxiety medication. For serious anxiety, ask your vet about safer options.",
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
    id: "trazodone",
    name: "Trazodone",
    generic: "Trazodone HCl",
    brand: ["Desyrel", "Oleptro"],
    category: "Antidepressant / Anxiolytic",
    prescription: true,
    dosageMin: 2,
    dosageMax: 5,
    dosageUnit: "mg per kg",
    frequency: "Every 8–12 hours",
    maxDaily: 300,
    calculatorTitle: "Trazodone Dosage Calculator for Dogs",
    metaTitle:
      "Trazodone Dosage for Dogs — Calculator, Chart & Vet Guide",
    metaDescription:
      "Calculate trazodone dosage for dogs by weight. Includes dosage chart, anxiety-specific guidelines, side effects, warnings, and FAQs. Prescription-only medication. Always confirm with your veterinarian.",
    overview: [
      "Trazodone is a prescription medication that has become increasingly popular in veterinary medicine for managing anxiety and stress in dogs. It belongs to a class of drugs called serotonin antagonist and reuptake inhibitors (SARIs), which help stabilize mood and reduce anxiety without the heavy sedation associated with older tranquilizers.",
      "Veterinarians commonly prescribe trazodone for dogs who experience situational anxiety — such as during thunderstorms, fireworks, car travel, veterinary visits, or grooming appointments. It is also frequently used for dogs with generalized anxiety, separation anxiety, and post-surgical restlessness. Because it is short-acting and generally well-tolerated, it has become a first-line choice for many behavior-related concerns.",
      "Trazodone is only available by prescription, and the correct dose depends on your dog's weight, the reason it is being prescribed, and your dog's overall health. It should never be given without veterinary supervision, and it should not be combined with other serotonergic drugs without professional guidance.",
    ],
    howItWorks:
      "Trazodone works by blocking serotonin reuptake in the brain while also blocking certain serotonin receptors. The result is a calming effect that reduces anxiety without causing the deep sedation seen with traditional sedatives. The medication usually starts working within 1 to 2 hours after being given orally, and its effects last between 8 and 12 hours. This is why it is often dosed 1 to 2 hours before a stressful event and then repeated as needed throughout the day.",
    howOften:
      "Trazodone is typically given every 8 to 12 hours, or as directed by your veterinarian. For situational anxiety, it is often given 1 to 2 hours before the stressful event. For daily anxiety, it may be prescribed on a regular schedule. The maximum daily dose depends on your dog's weight and condition, and your vet will determine the right schedule for your dog.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Trazodone prescribed by your veterinarian for your specific dog, following the exact dose and schedule provided.",
      },
      {
        label: "Unsafe",
        text: "Giving trazodone without a prescription or without veterinary guidance. This medication is not appropriate for every dog and requires professional evaluation.",
      },
      {
        label: "Unsafe",
        text: "Combining trazodone with MAO inhibitors, SSRIs, or other serotonin-boosting drugs. This can lead to serotonin syndrome, a potentially life-threatening condition.",
      },
      {
        label: "Unsafe",
        text: "Giving trazodone to dogs with certain heart conditions, liver disease, or kidney disease without veterinary approval.",
      },
    ],
    whenToCallVet: [
      "Your dog shows signs of serotonin syndrome: agitation, confusion, rapid heart rate, tremors, or high body temperature.",
      "Your dog becomes excessively sedated or difficult to wake.",
      "You accidentally give more than the prescribed dose.",
      "Your dog's anxiety does not improve or worsens after starting trazodone.",
      "Your dog develops vomiting, diarrhea, or loss of appetite that persists.",
      "You are considering combining trazodone with any other medication or supplement.",
    ],
    formulations: [
      "50 mg tablet",
      "100 mg tablet",
      "150 mg tablet",
      "Compounded liquid (for small dogs)",
    ],
    uses: [
      "Situational anxiety (storms, fireworks, travel)",
      "Separation anxiety",
      "Veterinary visit stress",
      "Post-surgical restlessness and confinement",
      "Generalized anxiety (with behavioral therapy)",
    ],
    sideEffects: [
      "Sedation and drowsiness",
      "Vomiting or diarrhea",
      "Increased appetite",
      "Drooling",
      "Loss of coordination",
      "Rare: serotonin syndrome with severe symptoms",
    ],
    warnings: [
      "Prescription required — never give trazodone without veterinary approval.",
      "Do not combine with MAO inhibitors, SSRIs, or tramadol without veterinary guidance.",
      "Use with caution in dogs with liver or kidney disease.",
      "Do not stop abruptly after long-term use — taper under veterinary supervision.",
      "Not approved for use in pregnant or nursing dogs.",
    ],
    quickAnswer:
      "The typical trazodone dosage for dogs is 2–5 mg per kg (approximately 1–2.3 mg per pound), given every 8–12 hours. For anxiety, vets often recommend giving it 1 to 2 hours before a stressful event. Trazodone is a prescription medication — always follow your veterinarian's exact instructions.",
    faqs: [
      {
        q: "What is the dosage of trazodone for dogs?",
        a: "2–5 mg per kg every 8–12 hours, prescribed by your veterinarian. Dosage depends on the reason for use and your dog's health.",
      },
      {
        q: "What is the trazodone dosage for dogs per pound?",
        a: "Approximately 1–2.3 mg per pound. A 50 lb dog typically receives 50–115 mg per dose.",
      },
      {
        q: "What is the dosage of trazodone for dogs for anxiety?",
        a: "For anxiety, vets often prescribe 2–5 mg per kg, given 1–2 hours before the stressful event. Follow your vet's exact instructions.",
      },
      {
        q: "Can I give my dog trazodone every day?",
        a: "Only if prescribed by your veterinarian. Long-term use requires monitoring and should not be stopped abruptly.",
      },
      {
        q: "What happens if I give my dog too much trazodone?",
        a: "Signs include severe sedation, vomiting, tremors, and serotonin syndrome. Contact an emergency vet immediately.",
      },
      {
        q: "Can trazodone and gabapentin be given together?",
        a: "Yes, vets sometimes prescribe both together for anxiety and pain, but only under veterinary supervision.",
      },
      {
        q: "How long does trazodone take to work in dogs?",
        a: "Trazodone usually starts working within 1 to 2 hours after being given and lasts 8 to 12 hours.",
      },
      {
        q: "Is trazodone safe for long-term use in dogs?",
        a: "It can be used long-term under veterinary supervision. Regular check-ups may be needed.",
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
    id: "gabapentin",
    name: "Gabapentin",
    generic: "Gabapentin",
    brand: ["Neurontin", "Gralise"],
    category: "Anticonvulsant / Analgesic",
    prescription: true,
    dosageMin: 5,
    dosageMax: 10,
    dosageUnit: "mg per kg",
    frequency: "Every 8–12 hours",
    maxDaily: 600,
    calculatorTitle: "Gabapentin Dosage Calculator for Dogs",
    metaTitle:
      "Gabapentin Dosage for Dogs — Calculator, Chart & Weight Guide",
    metaDescription:
      "Calculate gabapentin dosage for dogs by weight. Includes dosage chart, how often to give it, side effects, warnings, and FAQs. Prescription-only medication. Always confirm with your veterinarian.",
    overview: [
      "Gabapentin is a prescription medication originally developed as an anti-seizure drug for humans, but it has become widely used in veterinary medicine for its powerful pain-relieving properties. In dogs, gabapentin is most commonly prescribed for chronic pain, neuropathic pain, and as part of a broader pain management plan.",
      "Veterinarians often prescribe gabapentin for dogs with arthritis, intervertebral disc disease, post-surgical pain, and nerve-related conditions. It is also frequently used before veterinary visits or surgeries to reduce anxiety and provide mild sedation. Because it works on the nervous system, gabapentin can be highly effective for pain that does not respond well to traditional NSAIDs alone.",
      "Gabapentin is generally well-tolerated, but it is only available by prescription and should only be given under veterinary supervision. The dose varies widely depending on the condition being treated and the individual dog. Some dogs need a much higher dose than others to get the same effect, so your veterinarian will often adjust the dose over time.",
    ],
    howItWorks:
      "Gabapentin works by binding to calcium channels in the nervous system, which reduces the release of certain neurotransmitters involved in pain signaling. This makes it effective for nerve pain and chronic pain that other medications cannot fully control. It also has mild sedative effects, which is why it is sometimes used for anxiety and pre-surgical calming. The medication typically starts working within 1 to 2 hours and effects last 8 to 12 hours.",
    howOften:
      "Gabapentin is usually given every 8 to 12 hours, which means two to three doses per day. For some dogs, your veterinarian may recommend a higher dose at the start and then taper it down as your dog's pain improves. Never change the dose or schedule without consulting your veterinarian, and do not stop the medication abruptly — especially if your dog has been on it for a long time.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Gabapentin prescribed by your veterinarian for your dog's specific condition, given at the exact dose and schedule recommended.",
      },
      {
        label: "Unsafe",
        text: "Giving gabapentin without a prescription or without veterinary supervision. This medication is not appropriate for every dog.",
      },
      {
        label: "Unsafe",
        text: "Stopping gabapentin abruptly after long-term use. This can cause rebound pain or seizures and should only be done under veterinary guidance.",
      },
      {
        label: "Unsafe",
        text: "Combining gabapentin with other sedatives, opioids, or tranquilizers without veterinary approval. This can cause excessive sedation.",
      },
    ],
    whenToCallVet: [
      "Your dog becomes excessively sedated or difficult to wake.",
      "You accidentally give more than the prescribed dose.",
      "Your dog shows signs of an allergic reaction: swelling, hives, or difficulty breathing.",
      "Your dog's pain does not improve after starting gabapentin.",
      "You notice signs of kidney problems: increased thirst, urination, or lethargy.",
      "You are considering stopping gabapentin or changing the dose.",
    ],
    formulations: [
      "100 mg capsule",
      "300 mg capsule (most common)",
      "400 mg capsule",
      "Compounded liquid (for small dogs or precise dosing)",
    ],
    uses: [
      "Chronic pain (arthritis, joint disease)",
      "Neuropathic pain",
      "Post-surgical pain",
      "Pre-surgical sedation",
      "Adjunct therapy for seizures",
      "Anxiety-related sedation (off-label)",
    ],
    sideEffects: [
      "Sedation and drowsiness",
      "Loss of coordination (ataxia)",
      "Vomiting or diarrhea",
      "Increased appetite",
      "Drooling",
      "Rare: behavioral changes or agitation",
    ],
    warnings: [
      "Prescription required — never give gabapentin without veterinary approval.",
      "Do not stop abruptly after long-term use — taper under veterinary guidance.",
      "Use with caution in dogs with kidney disease.",
      "May interact with other sedatives, opioids, or NSAIDs.",
      "Not approved for use in pregnant or nursing dogs.",
    ],
    quickAnswer:
      "The typical gabapentin dosage for dogs is 5–10 mg per kg (about 2.3–4.5 mg per pound), given every 8–12 hours. For a 20 kg (44 lb) dog, that works out to roughly 100–200 mg per dose. Gabapentin is a prescription medication — always follow your veterinarian's exact instructions.",
    faqs: [
      {
        q: "What is the dosage of gabapentin for dogs?",
        a: "5–10 mg per kg every 8–12 hours. Your vet may adjust based on your dog's condition and response.",
      },
      {
        q: "What is the gabapentin dosage for dogs by weight?",
        a: "A 20 kg (44 lb) dog typically receives 100–200 mg per dose. A 40 kg (88 lb) dog receives 200–400 mg per dose.",
      },
      {
        q: "Gabapentin 300 mg for dogs — is that safe?",
        a: "300 mg is a common dose for medium to large dogs, but only if prescribed by a veterinarian. Never guess — always confirm with your vet.",
      },
      {
        q: "How much gabapentin can I give my dog?",
        a: "Maximum daily dose depends on your dog's weight and condition. Never exceed your vet's prescribed amount.",
      },
      {
        q: "Can gabapentin and trazodone be given together?",
        a: "Yes, this combination is sometimes prescribed for anxiety and pain. Only under veterinary supervision.",
      },
      {
        q: "How long does gabapentin last in dogs?",
        a: "Effects typically last 8–12 hours, which is why it's dosed 2–3 times per day.",
      },
      {
        q: "Can gabapentin be used for dog anxiety?",
        a: "It is sometimes used off-label for anxiety and sedation, but it is not a primary anti-anxiety medication. Ask your vet about the best option for your dog.",
      },
      {
        q: "Can I stop gabapentin suddenly?",
        a: "No. Stopping abruptly after long-term use can cause rebound pain or seizures. Always taper under veterinary guidance.",
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
    id: "carprofen",
    name: "Carprofen",
    generic: "Carprofen",
    brand: ["Rimadyl", "Novox", "Vetprofen"],
    category: "NSAID",
    prescription: true,
    dosageMin: 2.2,
    dosageMax: 4.4,
    dosageUnit: "mg per kg",
    frequency: "Every 12 hours",
    maxDaily: 200,
    calculatorTitle: "Carprofen Dosage Calculator for Dogs",
    metaTitle:
      "Carprofen Dosage for Dogs — Calculator, Chart & Safety Guide",
    metaDescription:
      "Calculate carprofen (Rimadyl) dosage for dogs by weight. Includes dosage chart, side effects, NSAID warnings, and FAQs. Prescription-only medication. Always confirm with your veterinarian.",
    overview: [
      "Carprofen is a prescription nonsteroidal anti-inflammatory drug (NSAID) commonly used in dogs to manage pain and inflammation. It is sold under several brand names including Rimadyl, Novox, and Vetprofen. Carprofen is one of the most widely prescribed pain medications in veterinary medicine and is frequently used for arthritis, post-surgical pain, and injuries.",
      "Carprofen works by blocking the enzymes that produce prostaglandins, which are chemicals responsible for inflammation and pain. By reducing prostaglandin production, carprofen reduces both swelling and pain. It is not a steroid, so it does not have the same side effects as corticosteroids, but it still requires careful use and regular monitoring.",
      "Because carprofen is an NSAID, it must be used with care. It should never be given with other NSAIDs or steroids, and it is not appropriate for dogs with liver or kidney disease, bleeding disorders, or certain gastrointestinal conditions. Your veterinarian will typically recommend blood tests before starting carprofen and may repeat them periodically during long-term use.",
    ],
    howItWorks:
      "Carprofen is absorbed quickly after being given orally, usually reaching peak levels in the blood within 1 to 3 hours. Its anti-inflammatory and pain-relieving effects last around 12 hours, which is why it is typically dosed twice a day. The medication is processed by the liver and excreted through bile and urine, so dogs with liver or kidney problems may need a different medication or a reduced dose.",
    howOften:
      "Carprofen is usually given every 12 hours, though some veterinarians prescribe it once daily at a higher dose for certain conditions. The maximum daily dose depends on your dog's weight and health. Do not increase the dose or frequency without veterinary approval, and never give carprofen on an empty stomach — always give it with food to reduce the risk of stomach upset.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Veterinary-prescribed carprofen (Rimadyl, Novox, Vetprofen) given at the exact dose and schedule recommended by your veterinarian.",
      },
      {
        label: "Unsafe",
        text: "Human NSAIDs such as ibuprofen, naproxen, or aspirin. These are not the same as carprofen and can be highly toxic to dogs.",
      },
      {
        label: "Unsafe",
        text: "Combining carprofen with steroids (such as prednisone) or other NSAIDs. This greatly increases the risk of stomach ulcers and kidney damage.",
      },
      {
        label: "Unsafe",
        text: "Giving carprofen to dogs with liver disease, kidney disease, bleeding disorders, or stomach ulcers without veterinary approval.",
      },
    ],
    whenToCallVet: [
      "Your dog shows signs of stomach upset: vomiting, diarrhea, or black/tarry stools.",
      "Your dog loses appetite or becomes unusually lethargic.",
      "You notice yellowing of the gums, eyes, or skin (sign of liver problems).",
      "Your dog's pain does not improve or worsens after starting carprofen.",
      "You accidentally give more than the prescribed dose.",
      "Your dog is on other medications and you are considering adding carprofen.",
    ],
    formulations: [
      "25 mg tablet",
      "75 mg tablet",
      "100 mg tablet",
      "Chewable tablet (flavored)",
      "Injectable (used by veterinarians)",
    ],
    uses: [
      "Osteoarthritis and joint pain",
      "Post-surgical pain and inflammation",
      "Soft tissue injuries",
      "Dental pain (short-term)",
      "Chronic pain management (with monitoring)",
    ],
    sideEffects: [
      "Vomiting or diarrhea",
      "Loss of appetite",
      "Lethargy",
      "Black or tarry stools (sign of stomach bleeding)",
      "Liver toxicity (rare, with long-term use)",
      "Kidney problems (rare)",
    ],
    warnings: [
      "Prescription required — never give carprofen without veterinary approval.",
      "Do not combine with other NSAIDs or steroids.",
      "Do not use in dogs with liver or kidney disease, bleeding disorders, or stomach ulcers.",
      "Not for use in pregnant or nursing dogs.",
      "Regular blood tests are recommended during long-term use.",
    ],
    quickAnswer:
      "The typical carprofen dosage for dogs is 2.2 mg per kg (1 mg per pound) every 12 hours, or 4.4 mg per kg (2 mg per pound) once daily. For example, a 50 lb dog would receive 50 mg twice daily or 100 mg once daily. Carprofen is a prescription NSAID — always follow your veterinarian's exact instructions.",
    faqs: [
      {
        q: "What is the carprofen dosage for dogs?",
        a: "2.2 mg per kg every 12 hours, or 4.4 mg per kg once daily, prescribed by your vet. Do not exceed.",
      },
      {
        q: "Can I give my dog human carprofen?",
        a: "No. Human formulations may contain different ingredients. Only use veterinary-prescribed carprofen.",
      },
      {
        q: "How long can my dog take carprofen?",
        a: "Short-term use is common. Long-term use requires regular blood tests to monitor liver and kidney function.",
      },
      {
        q: "What are the side effects of carprofen in dogs?",
        a: "Vomiting, diarrhea, appetite loss, and rarely liver or kidney problems. Stop and call your vet if you notice these.",
      },
      {
        q: "Can carprofen be given with gabapentin?",
        a: "Yes, vets sometimes prescribe both for pain, but only under supervision.",
      },
      {
        q: "Is Rimadyl the same as carprofen?",
        a: "Yes. Rimadyl is a brand name for carprofen. Same active ingredient.",
      },
      {
        q: "Can carprofen be given on an empty stomach?",
        a: "No. Always give carprofen with food to reduce the risk of stomach upset.",
      },
      {
        q: "What if I miss a dose of carprofen?",
        a: "Give the missed dose as soon as you remember, unless it is almost time for the next dose. Never double the dose.",
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
    id: "zyrtec",
    name: "Zyrtec",
    generic: "Cetirizine",
    brand: ["Zyrtec", "Reactine"],
    category: "Antihistamine",
    prescription: false,
    dosageMin: 0.5,
    dosageMax: 1,
    dosageUnit: "mg per kg",
    frequency: "Every 24 hours",
    maxDaily: 10,
    calculatorTitle: "Zyrtec Dosage Calculator for Dogs",
    metaTitle:
      "Zyrtec Dosage for Dogs — Calculator, Chart & Safe Guidelines",
    metaDescription:
      "Calculate Zyrtec (cetirizine) dosage for dogs by weight. Includes dosage chart, how often to give it, safe limits, side effects, and FAQs. Always confirm with your veterinarian.",
    overview: [
      "Zyrtec, known generically as cetirizine, is a second-generation antihistamine commonly used in dogs to manage allergies and itching. Unlike first-generation antihistamines like Benadryl, Zyrtec causes much less drowsiness, making it a good option for dogs who need ongoing allergy relief without constant sedation.",
      "Cetirizine works by blocking histamine receptors in the body, which reduces the symptoms of allergic reactions such as itching, sneezing, watery eyes, and skin irritation. It is often used for environmental allergies, seasonal allergies, and mild skin allergies. Some veterinarians also prescribe it as part of a broader allergy management plan.",
      "Zyrtec is available over the counter for humans, but you should never give it to your dog without first checking with your veterinarian. The dose depends on your dog's weight and health, and some dogs may not respond well to cetirizine. Additionally, you must only use plain cetirizine — never combination products like Zyrtec-D, which contain decongestants that are toxic to dogs.",
    ],
    howItWorks:
      "Cetirizine is absorbed quickly after being given orally and typically starts working within 1 hour. Its effects last around 24 hours, which is why it is usually dosed once daily. Because it is a second-generation antihistamine, it does not cross into the brain as easily as Benadryl, which is why it causes less drowsiness. The medication is processed by the liver and kidneys, so dogs with liver or kidney disease may need a lower dose or a different medication.",
    howOften:
      "Zyrtec is typically given once every 24 hours. Some veterinarians may recommend splitting the dose into two smaller doses given 12 hours apart if your dog experiences stomach upset. Always follow the specific schedule your veterinarian provides, and do not give more than the maximum daily dose of 10 mg without veterinary approval.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Plain cetirizine tablets or liquid without any additional active ingredients. This is the same medication used in human Zyrtec, provided it does not contain decongestants or other additives.",
      },
      {
        label: "Unsafe",
        text: "Zyrtec-D or any product containing pseudoephedrine. Pseudoephedrine is highly toxic to dogs and can cause dangerously high heart rate, seizures, and even death.",
      },
      {
        label: "Unsafe",
        text: "Combination cold and flu products that mix cetirizine with acetaminophen, ibuprofen, or other pain relievers. These can cause severe liver or kidney damage in dogs.",
      },
      {
        label: "Unsafe",
        text: "Sugar-free or alcohol-containing liquid formulations. Many liquid products contain xylitol or alcohol, both of which should be avoided in dogs.",
      },
    ],
    whenToCallVet: [
      "Your dog has ingested Zyrtec-D or any combination product containing pseudoephedrine or acetaminophen.",
      "You accidentally gave more than the recommended dose.",
      "Your dog shows signs of an allergic reaction: swelling, hives, or difficulty breathing.",
      "Your dog's allergy symptoms do not improve within a few days of starting Zyrtec.",
      "Your dog develops vomiting, diarrhea, or loss of appetite that persists.",
      "Your dog has liver or kidney disease and you are considering giving Zyrtec.",
    ],
    formulations: [
      "5 mg tablet",
      "10 mg tablet (most common)",
      "Chewable tablets (check for xylitol)",
      "Liquid (check for xylitol or alcohol)",
    ],
    uses: [
      "Environmental allergies",
      "Seasonal allergies",
      "Itchy skin related to allergies",
      "Mild allergic reactions",
      "Chronic allergy management",
    ],
    sideEffects: [
      "Mild drowsiness (less than Benadryl)",
      "Vomiting or diarrhea",
      "Increased thirst",
      "Loss of appetite",
      "Rare: agitation or restlessness",
    ],
    warnings: [
      "Never give Zyrtec-D, Zyrtec-DM, or any combination product containing pseudoephedrine — these are toxic to dogs.",
      "Avoid in dogs with liver or kidney disease unless directed by a veterinarian.",
      "Not for use in pregnant or nursing dogs without veterinary advice.",
      "Never give human liquid Zyrtec that contains xylitol or alcohol.",
      "Do not combine with other antihistamines or sedatives without veterinary advice.",
    ],
    quickAnswer:
      "The typical Zyrtec (cetirizine) dosage for dogs is 0.5–1 mg per kg (about 0.23–0.45 mg per pound), given once every 24 hours. For example, a 20 kg (44 lb) dog would receive 10–20 mg per day. Always confirm with your veterinarian before giving Zyrtec to your dog.",
    faqs: [
      {
        q: "What is the Zyrtec dosage for dogs?",
        a: "0.5–1 mg per kg once daily. A 20 kg dog would receive 10–20 mg per day.",
      },
      {
        q: "Can I give my dog Zyrtec?",
        a: "Yes, plain cetirizine is generally safe, but never use Zyrtec-D (contains pseudoephedrine, which is toxic to dogs).",
      },
      {
        q: "Is Zyrtec or Benadryl better for dogs?",
        a: "Zyrtec causes less drowsiness. Benadryl is more commonly used for acute allergic reactions. Ask your vet which is best for your dog.",
      },
      {
        q: "How often can I give my dog Zyrtec?",
        a: "Once every 24 hours. Do not exceed the recommended dose.",
      },
      {
        q: "Can Zyrtec be used long-term in dogs?",
        a: "Yes, under veterinary supervision. Regular check-ups may be recommended.",
      },
      {
        q: "Does Zyrtec cause drowsiness in dogs?",
        a: "It can cause mild drowsiness, but much less than Benadryl. Most dogs tolerate it well.",
      },
      {
        q: "Can I give my dog Zyrtec for itching?",
        a: "Yes, cetirizine is commonly used for allergy-related itching. Always confirm the dose with your vet first.",
      },
      {
        q: "What if I miss a dose of Zyrtec for my dog?",
        a: "Give the missed dose as soon as you remember, unless it's almost time for the next dose. Never double the dose.",
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
    id: "meloxicam",
    name: "Meloxicam",
    generic: "Meloxicam",
    brand: ["Metacam", "Mobic", "Loxicom"],
    category: "NSAID",
    prescription: true,
    dosageMin: 0.1,
    dosageMax: 0.2,
    dosageUnit: "mg per kg",
    frequency: "Once daily",
    maxDaily: 10,
    calculatorTitle: "Meloxicam Dosage Calculator for Dogs",
    metaTitle:
      "Meloxicam Dosage for Dogs — Calculator, Chart & Metacam Guide",
    metaDescription:
      "Calculate meloxicam (Metacam) dosage for dogs by weight. Includes dosage chart, safety information, side effects, and FAQs. Prescription-only NSAID. Always confirm with your veterinarian.",
    overview: [
      "Meloxicam is a prescription nonsteroidal anti-inflammatory drug (NSAID) widely used in veterinary medicine to manage pain and inflammation in dogs. It is sold under several brand names including Metacam, Loxicom, and Rheumocam. Meloxicam is particularly popular for treating osteoarthritis and post-surgical pain, and it comes in a flavored liquid form that many dogs readily accept.",
      "Meloxicam works by blocking the enzymes that produce prostaglandins, which are chemicals responsible for inflammation, pain, and fever. By reducing prostaglandin production, meloxicam reduces swelling and pain without the side effects of steroids. It is one of the most commonly prescribed NSAIDs in veterinary medicine.",
      "Because meloxicam is an NSAID, it must be used carefully. It should never be given with other NSAIDs or steroids, and it is not appropriate for dogs with liver or kidney disease, bleeding disorders, or stomach ulcers. Your veterinarian will typically recommend blood tests before starting meloxicam and may repeat them periodically during long-term use. Meloxicam is also not appropriate for cats — they require a different formulation and dose.",
    ],
    howItWorks:
      "Meloxicam is well-absorbed after being given orally, and its effects last around 24 hours, which is why it is typically dosed once daily. The medication is processed by the liver and excreted through bile and urine, so dogs with liver or kidney problems may need a different medication or a reduced dose. For most dogs, the initial dose is higher, followed by a lower maintenance dose.",
    howOften:
      "Meloxicam is typically given once daily. The first dose is often higher (0.2 mg per kg), followed by a lower maintenance dose (0.1 mg per kg once daily). Some veterinarians may split the dose into two smaller doses given 12 hours apart. Always follow the specific schedule your veterinarian provides, and never increase the dose without veterinary approval.",
    safeUnsafe: [
      {
        label: "Safe",
        text: "Veterinary-prescribed meloxicam (Metacam, Loxicom, Rheumocam) given at the exact dose and schedule recommended by your veterinarian.",
      },
      {
        label: "Unsafe",
        text: "Human NSAIDs such as ibuprofen, naproxen, or aspirin. These are not the same as meloxicam and can be highly toxic to dogs.",
      },
      {
        label: "Unsafe",
        text: "Combining meloxicam with steroids (such as prednisone) or other NSAIDs. This greatly increases the risk of stomach ulcers and kidney damage.",
      },
      {
        label: "Unsafe",
        text: "Giving meloxicam to cats. Cats require a different formulation and dose, and using dog meloxicam in cats can be dangerous.",
      },
    ],
    whenToCallVet: [
      "Your dog shows signs of stomach upset: vomiting, diarrhea, or black/tarry stools.",
      "Your dog loses appetite or becomes unusually lethargic.",
      "You notice yellowing of the gums, eyes, or skin (sign of liver problems).",
      "Your dog's pain does not improve or worsens after starting meloxicam.",
      "You accidentally give more than the prescribed dose.",
      "You are considering combining meloxicam with any other medication.",
    ],
    formulations: [
      "1.5 mg/ml oral suspension (most common for dogs)",
      "7.5 mg tablet",
      "15 mg tablet",
      "Injectable (used by veterinarians)",
    ],
    uses: [
      "Osteoarthritis and joint pain",
      "Post-surgical pain and inflammation",
      "Soft tissue injuries",
      "Chronic pain management (with monitoring)",
      "Inflammation from injuries",
    ],
    sideEffects: [
      "Vomiting or diarrhea",
      "Loss of appetite",
      "Lethargy",
      "Black or tarry stools (sign of stomach bleeding)",
      "Kidney problems (rare)",
      "Liver problems (rare, with long-term use)",
    ],
    warnings: [
      "Prescription required — never give meloxicam without veterinary approval.",
      "Do not combine with other NSAIDs or steroids.",
      "Do not use in dogs with liver or kidney disease, bleeding disorders, or stomach ulcers.",
      "Not for use in cats — they require a different formulation.",
      "Not for use in pregnant or nursing dogs.",
      "Regular blood tests are recommended during long-term use.",
    ],
    quickAnswer:
      "The typical meloxicam dosage for dogs is 0.2 mg per kg on the first day, followed by 0.1 mg per kg once daily as a maintenance dose. For example, a 20 kg (44 lb) dog would receive 4 mg on day one, then 2 mg once daily. Meloxicam is a prescription NSAID — always follow your veterinarian's exact instructions.",
    faqs: [
      {
        q: "What is the meloxicam dosage for dogs?",
        a: "0.2 mg per kg on day one, then 0.1 mg per kg once daily. Prescribed by a veterinarian only.",
      },
      {
        q: "Is Metacam the same as meloxicam?",
        a: "Yes. Metacam is a brand name for meloxicam. Same active ingredient, different manufacturer.",
      },
      {
        q: "How long can my dog take meloxicam?",
        a: "Short-term for post-surgical pain; long-term use requires regular blood tests to monitor kidney and liver function.",
      },
      {
        q: "Can meloxicam be given with gabapentin?",
        a: "Yes, vets sometimes prescribe both for pain management. Only under veterinary supervision.",
      },
      {
        q: "What are the side effects of meloxicam in dogs?",
        a: "Vomiting, diarrhea, appetite loss, and rarely kidney or liver issues. Stop and call your vet if these occur.",
      },
      {
        q: "Can meloxicam be given to cats?",
        a: "No, not the dog formulation. Cats require a different formulation and dose. Using dog meloxicam in cats can be dangerous.",
      },
      {
        q: "Can meloxicam be given on an empty stomach?",
        a: "No. Always give meloxicam with food to reduce the risk of stomach upset.",
      },
      {
        q: "What if I miss a dose of meloxicam for my dog?",
        a: "Give the missed dose as soon as you remember, unless it's almost time for the next dose. Never double the dose.",
      },
    ],
    sources: [
      "U.S. Food and Drug Administration (FDA) — Veterinary Medication Safety",
      "Merck Veterinary Manual",
      "Plumb's Veterinary Drug Handbook",
      "American Veterinary Medical Association (AVMA)",
    ],
  },
];

export function getMedicineById(id: string): Medicine | undefined {
  return medicines.find((m) => m.id === id);
}