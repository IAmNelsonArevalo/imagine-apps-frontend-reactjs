import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

const CardProduct: React.FC<any> = ({
    images,
    name,
    references,
    getMinValue,
    description,
    onClick,
}) => {
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={images ? images[0].url : ""}
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        {name ? name : ""}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        Desde $ {getMinValue(references ? references : [{price: "0"}]).toLocaleString('co-ES')}
                    </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">
                    {description ? description : ""}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    onClick={onClick}
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                    Agregar Al Carrito
                </Button>
            </CardFooter>
        </Card>
    );;
}

export default CardProduct;