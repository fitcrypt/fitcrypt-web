import React from "react";
import Legends from "../component/Legends";
import SEO from "../component/SEO";

function Inspiration() {
  const legends = [
    {
      id: 1,
      name: "Chris Bumstead",
      nickname: "Cbum",
      achievements: "5x Mr. Olympia Classic Physique",
      quote: "Stay Classic.",
      philosophy: "Train hard, recover harder, stay consistent.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220652/cbum_dwevrn.jpg",
      videos: ["https://www.youtube.com/embed/KYJsC-UdNG4"],
      trainingLink:
        "https://www.jackedfactory.com/pages/chris-bumstead-workout",
      socials: {
        instagram: "https://instagram.com/cbum",
        website: "https://www.chrisbumstead.com",
      },
    },
    {
      id: 2,
      name: "Bruce Lee",
      nickname: "The Dragon",
      achievements: "Martial Arts Icon, Founder of Jeet Kune Do",
      quote: "Be water, my friend.",
      philosophy:
        "Absorb what is useful, discard what is not, add what is uniquely your own.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220651/bruce_oeqqvf.jpg",
      videos: ["https://www.youtube.com/embed/2hFBevGjKJg"],
      trainingLink:
        "https://www.muscleandstrength.com/articles/bruce-lee-workout-training-philosophy",
      socials: {
        instagram: "https://instagram.com/brucelee",
        website: "https://brucelee.com",
      },
    },
    {
      id: 3,
      name: "Truett Hanes",
      nickname: "Pull-up Machine",
      achievements: "World Record: 10,001 Pull-ups in 24 Hours",
      quote: "Pain is temporary, pride is forever.",
      philosophy: "Break records by breaking limits.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220653/hanes_cimmf6.jpg",
      videos: ["https://www.youtube.com/embed/3_NLT_t6kTQ"],
      trainingLink:
        "https://www.guinnessworldrecords.com/world-records/most-pull-ups-in-24-hours",
      socials: {
        instagram: "https://www.instagram.com/truett.hanes",
        website: "https://linktr.ee/truetthanes",
      },
    },
    {
      id: 4,
      name: "David Goggins",
      nickname: "The Toughest Man Alive",
      achievements: "Ultra-endurance Athlete, Navy SEAL, Author",
      quote: "Stay hard.",
      philosophy: "Callous the mind. Push through pain. Suffer to grow.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751221160/DavidGoggins_a8yod6.jpg",
      videos: ["https://www.youtube.com/embed/78I9dTB9vqM"],
      trainingLink: "https://davidgoggins.com/",
      socials: {
        instagram: "https://instagram.com/davidgoggins",
        website: "https://davidgoggins.com",
      },
    },
    {
      id: 5,
      name: "Usain Bolt",
      nickname: "Lightning Bolt",
      achievements: "8x Olympic Gold Medalist, Fastest Man Alive",
      quote: "Don’t think about the start of the race, think about the ending.",
      philosophy: "Train smart, stay relaxed, and execute.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220653/Bolt_ojdgds.jpg",
      videos: ["https://www.youtube.com/embed/2O7K-8G2nwU"],
      trainingLink: "https://www.redbull.com/int-en/athlete/usain-bolt",
      socials: {
        instagram: "https://instagram.com/usainbolt",
        website: "https://usainbolt.com",
      },
    },

    {
      id: 6,
      name: "Muhammad Ali",
      nickname: "The Greatest",
      achievements: "3x World Heavyweight Champion Boxer",
      quote: "Float like a butterfly, sting like a bee.",
      philosophy:
        "Confidence, courage, and conviction inside and outside the ring.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220653/Muhammad_Ali_jwxy6e.jpg",
      videos: ["https://www.youtube.com/embed/Jy9ePZNan_k"],
      trainingLink: "https://boxingscene.com/muhammad-ali-training--152377",
      socials: {
        instagram: "https://www.instagram.com/muhammadali",
        website: "https://muhammadali.com",
      },
    },
    {
      id: 7,
      name: "Arnold Schwarzenegger",
      nickname: "Austrian Oak",
      achievements: "7x Mr. Olympia, Actor, Governor of California",
      quote: "The worst thing I can be is the same as everybody else.",
      philosophy: "Train hard, visualize success, and give back to the world.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220652/Arnold_S_cizuzd.jpg",
      videos: ["https://www.youtube.com/embed/xnY9AdqMFY8"],
      trainingLink:
        "https://www.bodybuilding.com/fun/arnold-schwarzenegger-blueprint-training.html",
      socials: {
        instagram: "https://www.instagram.com/schwarzenegger",
        website: "https://schwarzenegger.com",
      },
    },
    {
      id: 8,
      name: "Mike Tyson",
      nickname: "Iron Mike",
      achievements: "Youngest Heavyweight Boxing Champion in History",
      quote: "Everyone has a plan until they get punched in the mouth.",
      philosophy: "Explosive power, discipline, and aggressive focus.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220654/tyson_qu79ev.jpg",
      videos: ["https://www.youtube.com/embed/3zZ9F3z8V4k"],
      trainingLink:
        "https://www.muscleandfitness.com/routine/workouts/workout-routines/mike-tyson-workout/",
      socials: {
        instagram: "https://www.instagram.com/miketyson",
        website: "https://tyson20.com",
      },
    },
    {
      id: 9,
      name: "Ronnie Coleman",
      nickname: "The King",
      achievements: "8x Mr. Olympia Champion",
      quote: "Yeah buddy! Lightweight baby!",
      philosophy: "Go heavy, stay consistent, never complain.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751221332/Ronnie_takas7.jpg",
      videos: ["https://www.youtube.com/embed/2yjwXTZQDDI"],
      trainingLink:
        "https://www.bodybuilding.com/fun/ronnie-coleman-workout.html",
      socials: {
        instagram: "https://www.instagram.com/ronniecoleman8",
        website: "https://ronniecoleman.net",
      },
    },
    {
      id: 10,
      name: "Miyamoto Musashi",
      nickname: "Sword Saint",
      achievements: "62 duels undefeated, Author of 'The Book of Five Rings'",
      quote:
        "You must understand that there is more than one path to the top of the mountain.",
      philosophy: "Discipline, clarity, and fluid combat strategy.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220653/Musashi_ttv7ax.jpg",
      videos: ["https://www.youtube.com/embed/F3m6iGxDM9g"],
      trainingLink: "https://en.wikipedia.org/wiki/Miyamoto_Musashi",
      socials: {
        instagram: "",
        website:
          "https://www.goodreads.com/book/show/86748.The_Book_of_Five_Rings",
      },
    },
    {
      id: 11,
      name: "Khabib Nurmagomedov",
      nickname: "The Eagle",
      achievements: "29-0 Undefeated UFC Lightweight Champion",
      quote: "You have to punch people in the face to make them respect you.",
      philosophy: "Faith, discipline, and relentless pressure.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220654/Khabib_u5rjno.jpg",
      videos: ["https://www.youtube.com/embed/I6kJJy90E-E"],
      trainingLink:
        "https://www.muscleandfitness.com/athletes-celebrities/pro-tips/khabib-nurmagomedov-training/",
      socials: {
        instagram: "https://www.instagram.com/khabib_nurmagomedov",
        website: "https://www.khabib.com",
      },
    },
    {
      id: 12,
      name: "BJ Penn",
      nickname: "The Prodigy",
      achievements: "2-Division UFC Champion (Lightweight & Welterweight)",
      quote: "The only thing that stops you is you.",
      philosophy:
        "Natural talent refined by years of hard training and BJJ mastery.",
      image:
        "https://res.cloudinary.com/dyqibxntm/image/upload/v1751220652/BjPenn_zcxm97.jpg",
      videos: ["https://www.youtube.com/embed/yGM-bUX7PZE"],
      trainingLink: "https://bjpenn.com/",
      socials: {
        instagram: "https://www.instagram.com/bjpenn",
        website: "https://bjpenn.com",
      },
    },
  ];

  return (
    <>
      <SEO 
        title="Inspiration - FitCrypt | Legends of Fitness"
        description="Get inspired by fitness legends like Chris Bumstead, Bruce Lee, and David Goggins. Discover their philosophies and achievements."
        keywords="fitness inspiration, workout motivation, fitness legends, bodybuilding icons"
        url="https://fitcrypt.app/inspiration"
      />
      <Legends legends={legends} />
    </>
  );
}

export default Inspiration;
