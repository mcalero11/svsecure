type WaveProps = {
  additionalClasses: string;
};

const Wave = ({ additionalClasses }: WaveProps) => {
  const defaultClasses = "fill-primary";
  const combinedClasses = `${defaultClasses} ${additionalClasses || ""}`;

  return (
    <svg className={combinedClasses} viewBox="0 0 1440 320">
      <path d="M0,128L34.3,106.7C68.6,85,137,43,206,32C274.3,21,343,43,411,85.3C480,128,549,192,617,192C685.7,192,754,128,823,122.7C891.4,117,960,171,1029,213.3C1097.1,256,1166,288,1234,272C1302.9,256,1371,192,1406,160L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" />
    </svg>
  );
};

export default Wave;
