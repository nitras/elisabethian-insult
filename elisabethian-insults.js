// Expanded word arrays
const adj1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", 
"dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", 
"infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", 
"quailing", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "Trump-voting",
"villainous", "warped", "wayward", "weedy", "yeasty", "rancid", "slothful", "timid", "unctuous", "vulgar", "sputtering", "uncouth", 
"toadish", "foolhardy", "slovenly", "boorish", "greedy", "drunken", "squirming", "ugly", "pot-bellied", "gnarled", "drunken", "mindless", 
"shrill", "horrible", "twisted", "unpleasant", "misguided", "tarnished", "rotten", "murderous", "gloomy", "unhinged", "wretched", 
"useless", "deformed", "repulsive", "grotesque", "greedy-eyed", "desolate", "vulgar", "unshapely", "scruffy", "vile", "mud-splattered", 
"ragged", "moody", "filthy", "disorderly", "wobbly", "slimy", "clumsy", "weak-minded", "shambling", "grubby", "blubbering", "mealy-mouthed"];


const adj2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", 
"common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", 
"fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "Elon-musky",
"hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", 
"motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", 
"shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "urchin-snouted", 
"weather-bitten", "blabbering", "lumbering", "staggering", "half-baked", "knock-kneed", "brain-sick", "yellow-bellied", "dirty-toed", 
"ill-tempered", "rattle-brained", "scaly-headed", "savage-eyed", "dim-witted", "spiteful", "starved", "slop-breathed", "cat-brained", 
"limp-wristed", "crawling", "left-handed", "clay-footed", "bone-crushed", "mud-splattered", "fat-handed", "empty-headed", 
"worn-out", "snake-tongued", "dirt-encrusted", "frost-bitten", "unwashed", "harsh-spoken", "splendidly filthy", "foolish-minded", 
"horse-faced", "tangle-haired", "faint-hearted", "feeble-spoken"];


const noun = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", 
"clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", 
"giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "jolthead", "lewdster", "lout", "maggot-pie", 
"malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", 
"pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlet", "vassal", "whey-face", "wagtail", "toadstool", "dung-pie", 
"mewling cur", "cod's head", "boar-arse", "cat's-fool", "snot-nose", "weasel-faced", "wretch", "sluggard", "plague-rat", "swine-gnawer", 
"worm-mouth", "fleabeast", "dog-turd", "toad-spawn", "wretch-snapper", "flesh-eater", "rat-fink", "dung-beetle", "swamp-dweller", 
"pea-brain", "grub-scratcher", "henchman", "worm-tongue", "liar", "goblin-skin", "butterfly-slayer", "scrap-peddler", "shame-pig", 
"dung-scooper", "horrid-heap", "blood-hound", "grime-pusher", "mud-muncher", "knuckle-dragger", "chicken-chaser", "rat-catcher", 
"piss-poor", "blunder-buzzard", "swine-flinger", "egg-sucker", "dark-soul", "rat-tail", "wobbly-dwarf", "sword-thug", "blight-worm", 
"gobble-guts", "waste-rat", "scrap-scorcher", "loathsome-crab", "night-bird", "bane-spitter"];


// Optimized insult generation
const generateInsult = () => {
  const index1 = Math.floor(Math.random() * adj1.length);
  const index2 = Math.floor(Math.random() * adj2.length);
  const index3 = Math.floor(Math.random() * noun.length);
  return `You ${adj1[index1]} ${adj2[index2]} ${noun[index3]}.`;
};


// Output the insult
//console.log(generateInsult());
generateInsult();
