package com.springboot.syngrow.Generator;


import org.hibernate.HibernateException;
import org.springframework.stereotype.Service;

@Service
public class IdGenerator {


    public IdGenerator() {

    }
    public  String generate (String prefix, String id) throws HibernateException
    {
        String strnum = id.substring(Math.max(0, id.length() -3));
        int value = Integer.parseInt(strnum);

        String customId;
        customId = prefix + String.format("%03d",++value);

        return  customId;
    }
}
