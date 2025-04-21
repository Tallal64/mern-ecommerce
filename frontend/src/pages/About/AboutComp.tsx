import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiCloudinary,
  SiJsonwebtokens,
  SiMongoose,
  SiReact,
  SiTypescript,
  SiReactrouter,
  SiShadcnui,
} from "react-icons/si";
import { MdShield } from "react-icons/md";
import { LuHardDriveUpload, LuBoxes } from "react-icons/lu";
import { TbBrandFramerMotion } from "react-icons/tb";

type technologiesProps = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function AboutComp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const technologies: {
    backend: technologiesProps[];
    frontend: technologiesProps[];
  } = {
    backend: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "Bcrypt", icon: MdShield },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "JSON Web Token", icon: SiJsonwebtokens },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Multer", icon: LuHardDriveUpload },
    ],
    frontend: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Router", icon: SiReactrouter },
      { name: "Zustand", icon: LuBoxes },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  };

  const TechStack = ({
    title,
    items,
  }: {
    title: string;
    items: technologiesProps[];
  }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-3 bg-card text-card-foreground rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <tech.icon className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="border max-w-4xl mx-auto p-6 bg-background rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          I'm a passionate full-stack developer with a love for creating elegant
          solutions to complex problems. My journey in web development has led
          me to work with a diverse range of technologies, always staying at the
          forefront of modern development practices. I believe in writing clean,
          maintainable code and building applications that not only work
          flawlessly but also provide an exceptional user experience.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
        <TechStack title="Backend Technologies" items={technologies.backend} />
        <TechStack
          title="Frontend Technologies"
          items={technologies.frontend}
        />
      </motion.div>
    </div>
  );
}
