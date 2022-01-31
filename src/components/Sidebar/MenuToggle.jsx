import { motion } from 'framer-motion'

const Path = props => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={props.color}
      strokeLinecap="round"
      {...props}
    />
  )
}

const MenuToggle = ({ onClick, isOpen, color }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >

      <svg width="25" height="25" viewBox="0 0 20 20">
        <Path
          color={color}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          color={color}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          color={color}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>

    </motion.button>
  )
}

export default MenuToggle