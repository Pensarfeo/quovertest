const formatDate = (date) => {
    const stringDate = date.toString()
    if (stringDate.length < 2) return `0${ stringDate }`
    return stringDate
}
export const createDraft = ({ firstName, lastName, email, year = 1917, month = 1, day = 1, vehicle }) => (
    {
        language: 'nl',
        partnerReference: [ {
            key: 'salesId',
            value: '12345678',
        },
        {
            key: 'productId',
            value: '235689',
        },
        ],
        policyholder: {
            address: {
                city: 'Bruxelles',
                country: 'BE',
                number: '44',
                street: 'Rue des palais',
                zip: '1000',
            },
            billingAddress: {
                city: 'Bruxelles',
                country: 'BE',
                number: '45',
                street: 'Rue des palais',
                zip: '1000',
            },
            company: {
                firstName,
                lastName,
                name: 'Qover SA',
                title: 'Mr',
                vat: 'BE0870123456',
            },
            contact: {
                email,
                phone: '+3226592323',
            },
        },
        risk: {
            drivers: [ {
                contact: {
                    email: 'john.doe@example.com',
                    phone: '+32478595959',
                },
                numberOfClaimsLast5Years: '0',
                person: {
                    birthDate: `${ year }-${ formatDate(month) }-${ formatDate(day) }`,
                    firstName: 'John',
                    lastName: 'Doe',
                    title: 'Mr',
                },
            } ],
            vehicle: {
                cascoInsurerCompany: 'AXA Belgium',
                details: vehicles[ vehicle ],
                firstRegistrationYear: '2017',
                identification: {
                    registration: {
                        country: 'BE',
                        plate: '1-ABC-123',
                    },
                },
                invoice: {
                    isPurchasedInLast6Months: true,
                    purchasedPriceIncludingVat: {
                        currency: 'EUR',
                        value: 1500000,
                    },
                },
            },
        },
        terms: {
            claimLimit: {
                currency: 'EUR',
                value: 1600000,
            },
            requestPaperCopy: false,
            startDate: '2017-12-17',
            variant: 'GAP60',
        },
    }
)

export const createPriceRequest = () => ({
    partnerReference: [ {
        key: 'salexId',
        value: '12345678',
    } ],
})

const vehicles = {
    'BMW 418d': {
        code: '114980',
        codeType: 'NAT',
        country: 'BE',
        vehicleType: '10',
    },
    'Toyota avensis': {
        code: '117499',
        codeType: 'NAT',
        country: 'BE',
        vehicleType: '10',
    },
    'Volkswagen Golf': {
        code: '101181',
        codeType: 'NAT',
        country: 'BE',
        vehicleType: '10',
    },
}
