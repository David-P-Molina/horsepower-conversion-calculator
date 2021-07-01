# Horse-Power Converter
Thank You for using the Horse-Power Converter! 
Have you ever wondered how many squirrels it would take to power your car, or how many squirrels it would take to launch a space shuttle?? Now there is an app for that.
Now you have the ability to calculate these numbers. Is this a useful app that pushes the knowledge of humanity farther? Not at all but I hope that you are entertained and can impress your friends with random knowledge about converting HP!
This SPA(Single Page Application) uses a Rails API for the backend. (https://github.com/David-P-Molina/strange-conversion-calculator-backend)

## Installation

### Clone the repository
#### Frontend
```shell
git clone https://github.com/David-P-Molina/strange-conversion-calculator
cd strange-conversion-calculator
```
#### Backend
```shell
git clone https://github.com/David-P-Molina/strange-conversion-calculator-backend
```
## Starting The Application
### Install dependencies
#### Backend
And then execute :

    $ bundle install
### Initialize the database

```shell
rails db:create
rails db:migrate
rails db:seed
```
### Starting The API
type:
```shell
rails server 
```
#### Frontend
In terminal execute:
```shell
 $ open index.html
```

## Future Features

### Interactive Examples Tab
Has several pictures of cars/planes to be converted with buttons, user can click on a button and a car/plane to calculate the animal based on that feature.
    [x] Have pictures and some base code
    [ ] Add to Navbar
    [ ] Create display functionality
    
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/David-P-Molina/strange-conversion-calculator. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/David-P-Molina/strange-conversion-calculator/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Strange Conversion Calculator's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/David-P-Molina/strange-conversion-calculator/blob/master/CODE_OF_CONDUCT.md).