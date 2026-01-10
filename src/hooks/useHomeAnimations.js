import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHomeAnimations(servicesRef, aboutRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-intro > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".service-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".home-services .home-cta", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".home-about .about-content > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".about-map", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
