import Hero from "../components/Hero";
import ScaleIn from "../components/motion/ScaleIn.jsx";

export default function About() {
  return (
    <div>
      <ScaleIn>
        <Hero
          text="Om oss"
          bread="Nunc facilisis ut orci sit amet rhoncus. Quisque ullamcorper nisl eu sem lacinia pellentesque. Duis turpis risus, luctus vel tempus et, venenatis ultrices nibh. Phasellus consectetur dignissim sem, non venenatis nisi varius vel. Donec feugiat volutpat feugiat. Aenean tincidunt tellus ut convallis maximus. Proin cursus sit amet mi eget accumsan. Mauris laoreet tempor lacus, at venenatis odio ultrices vitae. Nam porta, arcu sit amet luctus volutpat, est elit cursus purus, eget rhoncus ipsum diam id justo. Phasellus pulvinar sed elit nec ullamcorper. Nulla a venenatis dolor."
        />
      </ScaleIn>
    </div>
  );
}
